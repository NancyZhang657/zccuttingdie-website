interface AssetFetcher {
  fetch(request: Request): Promise<Response>;
}

interface D1Result {
  results?: Array<Record<string, unknown>>;
  success: boolean;
  meta?: Record<string, unknown>;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run(): Promise<D1Result>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface Env {
  ASSETS: AssetFetcher;
  DB: D1Database;
  RESEND_API_KEY: string;
  INQUIRY_FROM: string;
  INQUIRY_TO: string;
  INQUIRY_CC: string;
  ALLOWED_ORIGIN?: string;
}

interface EmailAttachment {
  filename: string;
  content: string; // Base64 encoded string
}

interface InquiryPayload {
  name: string;
  company: string;
  email: string;
  country: string;
  message: string;
  product: string;
  productSlug: string;
  pageUrl: string;
  fileName?: string;
  fileSize?: string;
  website?: string;
  attachments?: EmailAttachment[];
}

const MAX_FIELD_LENGTH = 4000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE_ORIGIN = 'https://zccuttingdie.com';

const PRODUCT_META: Record<string, { title: string; description: string }> = {
  'sandwich-die': {
    title: 'Sandwich Cutting Die | Zhongcheng',
    description: 'Custom sandwich cutting dies for cigarette, pharma, cosmetic and specialty packaging. Send your drawing for a tailored quote.',
  },
  'wooden-die': {
    title: 'Wooden Cutting Die | Zhongcheng',
    description: 'Custom wooden steel-rule dies for cartons, corrugated boxes, tags and leather. Built to your shape, size and machine requirements.',
  },
  'steel-counter-plate': {
    title: 'Steel Counter Plate | Zhongcheng',
    description: 'Custom hardened steel counter plates for sandwich die cutting, box creasing and punching. Matched to your die and drawing.',
  },
  'pertinax-counter-plate': {
    title: 'Pertinax Counter Plate | Zhongcheng',
    description: 'Custom resin-based Pertinax counter plates for die cutting and clean creasing. Size and thickness matched to your steel-rule die.',
  },
  'stripping-tools': {
    title: 'Stripping Tools | Zhongcheng',
    description: 'Manual and pneumatic stripping tools for removing inner-hole waste from cartons, gift boxes and food packaging production lines.',
  },
  'blanking-tools': {
    title: 'Blanking Tools | Zhongcheng',
    description: 'Pneumatic and automatic blanking tools for separating die-cut box blanks from cardboard waste in packaging production.',
  },
  'hot-stamping-embossing-die': {
    title: 'Hot Stamping & Embossing Die | Zhongcheng',
    description: 'Custom brass, aluminum and magnesium dies for foil stamping and embossing on paper, leather, fabric and premium packaging.',
  },
  'engraving-die': {
    title: 'Engraving Die & Blade | Zhongcheng',
    description: 'High-hardness engraving blades and cutters for logos, patterns and packaging applications. Custom sizes and blade sets available.',
  },
  'die-making-materials': {
    title: 'Die Making Materials & Tube Punches | Zhongcheng',
    description: 'Precision steel tube punches and spring punches for die making, labels, cardboard, leather and optical film hole processing.',
  },
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] || character);
}

function replaceMetaTag(html: string, pattern: RegExp, tag: string) {
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `  ${tag}\n</head>`);
}

function injectProductMeta(html: string, slug: string, meta: { title: string; description: string }) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = `${SITE_ORIGIN}/products/${slug}`;
  let updated = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  updated = replaceMetaTag(updated, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${description}" />`);
  updated = replaceMetaTag(updated, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  updated = replaceMetaTag(updated, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${title}" />`);
  updated = replaceMetaTag(updated, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${description}" />`);
  updated = replaceMetaTag(updated, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${canonical}" />`);
  updated = replaceMetaTag(updated, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${title}" />`);
  updated = replaceMetaTag(updated, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${description}" />`);
  return updated;
}

function jsonResponse(body: Record<string, unknown>, status: number, origin: string | null, env: Env) {
  const allowedOrigin = env.ALLOWED_ORIGIN || origin || '*';
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      Vary: 'Origin',
    },
  });
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : '';
}

function isValidPayload(payload: InquiryPayload) {
  return Boolean(
    payload.name &&
      payload.email &&
      EMAIL_PATTERN.test(payload.email) &&
      payload.message &&
      payload.product &&
      payload.productSlug,
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');

    if (url.pathname === '/api/inquiries') {
      if (request.method === 'OPTIONS') {
        return jsonResponse({ ok: true }, 200, origin, env);
      }

      if (request.method !== 'POST') {
        return jsonResponse({ ok: false, error: 'Method not allowed' }, 405, origin, env);
      }

      try {
        const raw = (await request.json()) as Record<string, unknown>;
        const rawAttachments = Array.isArray(raw.attachments) ? raw.attachments : [];
        const attachments: EmailAttachment[] = rawAttachments
          .filter((att): att is Record<string, unknown> => typeof att === 'object' && att !== null)
          .map((att) => ({
            filename: typeof att.filename === 'string' ? att.filename.trim() : 'attachment',
            content: typeof att.content === 'string' ? att.content.trim() : '',
          }))
          .filter((att) => att.filename && att.content)
          .slice(0, 5);

        const payload: InquiryPayload = {
          name: clean(raw.name),
          company: clean(raw.company),
          email: clean(raw.email),
          country: clean(raw.country),
          message: clean(raw.message),
          product: clean(raw.product),
          productSlug: clean(raw.productSlug),
          pageUrl: clean(raw.pageUrl),
          fileName: clean(raw.fileName),
          fileSize: clean(raw.fileSize),
          website: clean(raw.website),
          attachments: attachments.length > 0 ? attachments : undefined,
        };

        if (payload.website) {
          return jsonResponse({ ok: true }, 200, origin, env);
        }

        if (!isValidPayload(payload)) {
          return jsonResponse({ ok: false, error: 'Please complete the required fields.' }, 400, origin, env);
        }

        if (!env.DB) {
          console.error('Inquiry database is not configured');
          return jsonResponse({ ok: false, error: 'Inquiry service is not configured.' }, 503, origin, env);
        }

        if (!env.RESEND_API_KEY || !env.INQUIRY_FROM || !env.INQUIRY_TO || !env.INQUIRY_CC) {
          console.error('Inquiry email provider is not configured');
          return jsonResponse({ ok: false, error: 'Inquiry service is not configured.' }, 503, origin, env);
        }

        const inquiryId = crypto.randomUUID();
        await env.DB.prepare(
          `INSERT INTO inquiries (id, name, company, email, country, message, product, product_slug, page_url, email_status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
        )
          .bind(
            inquiryId,
            payload.name,
            payload.company || null,
            payload.email,
            payload.country || null,
            payload.message,
            payload.product,
            payload.productSlug,
            payload.pageUrl || null,
          )
          .run();

        const subject = `New Quote Request — ${payload.name}`;
        const attachedFilesCount = payload.attachments?.length || 0;
        const attachedFilesNames = payload.attachments?.map((a) => a.filename).join(', ') || 'None';

        const text = [
          `New Quote Request from ${payload.name}`,
          '========================================',
          '',
          `• Name: ${payload.name}`,
          `• Company: ${payload.company || '—'}`,
          `• Email: ${payload.email}`,
          `• Country: ${payload.country || '—'}`,
          `• Product / Requirement: ${payload.product}`,
          `• Attached Files: ${attachedFilesCount > 0 ? `${attachedFilesNames} (${attachedFilesCount} file(s) attached)` : 'None'}`,
          '',
          'Message:',
          '----------------------------------------',
          payload.message,
          '----------------------------------------',
        ].join('\n');

        const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #2d3748; background-color: #f7fafc; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #1a202c; color: #ffffff; padding: 20px 24px; border-bottom: 3px solid #f97316; }
    .header h2 { margin: 0; font-size: 18px; font-weight: 700; letter-spacing: -0.01em; color: #ffffff; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #cbd5e0; }
    .content { padding: 24px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #edf2f7; vertical-align: top; }
    .table td.label { width: 140px; font-weight: 600; color: #4a5568; background: #f8fafc; }
    .table td.value { color: #1a202c; }
    .badge { display: inline-block; padding: 3px 8px; background: #ebf8ff; color: #2b6cb0; border-radius: 4px; font-size: 12px; font-weight: 600; }
    .badge-file { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #f97316; padding: 14px 16px; border-radius: 4px; font-size: 14px; color: #2d3748; white-space: pre-wrap; word-break: break-word; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>📬 New Quote Request</h2>
      <p>Received from Zhongcheng Cutting Die Website (${payload.name})</p>
    </div>
    <div class="content">
      <table class="table">
        <tr>
          <td class="label">Name</td>
          <td class="value"><strong>${payload.name}</strong></td>
        </tr>
        <tr>
          <td class="label">Company</td>
          <td class="value">${payload.company || '—'}</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value"><a href="mailto:${payload.email}" style="color: #f97316; text-decoration: none; font-weight: 600;">${payload.email}</a></td>
        </tr>
        <tr>
          <td class="label">Country</td>
          <td class="value">${payload.country || '—'}</td>
        </tr>
        <tr>
          <td class="label">Product / Need</td>
          <td class="value"><span class="badge">${payload.product}</span></td>
        </tr>
        <tr>
          <td class="label">Attached Files</td>
          <td class="value">
            ${
              attachedFilesCount > 0
                ? `<span class="badge badge-file">📎 ${attachedFilesCount} file(s) attached: ${attachedFilesNames}</span>`
                : '<span style="color: #a0aec0;">None</span>'
            }
          </td>
        </tr>
      </table>

      <div style="font-size: 13px; font-weight: 700; color: #4a5568; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message</div>
      <div class="message-box">${payload.message}</div>
    </div>
    <div class="footer">
      This is an automated inquiry notification from Zhongcheng Cutting Die (zccuttingdie.com).<br>
      You can directly reply to this email to contact the customer.
    </div>
  </div>
</body>
</html>
        `.trim();

        const resendPayload: Record<string, unknown> = {
          from: env.INQUIRY_FROM,
          to: [env.INQUIRY_TO],
          cc: [env.INQUIRY_CC],
          reply_to: payload.email,
          subject,
          text,
          html,
        };

        if (payload.attachments && payload.attachments.length > 0) {
          resendPayload.attachments = payload.attachments.map((att) => ({
            filename: att.filename,
            content: att.content,
          }));
        }

        const resendController = new AbortController();
        const resendTimeout = setTimeout(() => resendController.abort(), 15000);
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(resendPayload),
          signal: resendController.signal,
        });
        clearTimeout(resendTimeout);

        if (!resendResponse.ok) {
          console.error('Resend email request failed', resendResponse.status);
          await env.DB.prepare(
            "UPDATE inquiries SET email_status = 'failed', updated_at = datetime('now') WHERE id = ?",
          )
            .bind(inquiryId)
            .run();
          return jsonResponse({ ok: false, error: 'Email provider rejected the request.' }, 502, origin, env);
        }

        const resendBody = (await resendResponse.json()) as { id?: string };
        await env.DB.prepare(
          "UPDATE inquiries SET email_status = 'sent', resend_id = ?, updated_at = datetime('now') WHERE id = ?",
        )
          .bind(resendBody.id || null, inquiryId)
          .run();

        return jsonResponse({ ok: true }, 200, origin, env);
      } catch {
        return jsonResponse({ ok: false, error: 'Invalid inquiry request.' }, 400, origin, env);
      }
    }

    const assetResponse = await env.ASSETS.fetch(request);
    const productMatch = url.pathname.match(/^\/products\/([a-z0-9-]+)\/?$/i);
    const productMeta = productMatch ? PRODUCT_META[productMatch[1].toLowerCase()] : undefined;
    if (!productMeta || !assetResponse.ok || !assetResponse.headers.get('content-type')?.includes('text/html')) {
      return assetResponse;
    }

    const html = await assetResponse.text();
    const updatedHtml = injectProductMeta(html, productMatch![1].toLowerCase(), productMeta);
    return new Response(updatedHtml, {
      status: assetResponse.status,
      headers: new Headers(assetResponse.headers),
    });
  },
};
