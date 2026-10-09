import { useState, useRef, type CSSProperties, type FormEvent, type ChangeEvent } from 'react';
import { MessageCircle, UploadCloud, FileCheck, X } from 'lucide-react';
import { useLang } from '../../lib/useLang';
import { WHATSAPP_URL } from '../../data/products';
import { trackEvent } from '../../lib/analytics';

const INQUIRY_API_URL = import.meta.env.VITE_INQUIRY_API_URL || '/api/inquiries';
const ACCEPTED_FILE_TYPES = '.dxf,.dwg,.ai,.pdf,.cdr,.step,.stp,.zip,.rar,.png,.jpg,.jpeg';

const inputStyle: CSSProperties = {
  background: 'var(--surface-mid)',
  border: '1px solid var(--border-light)',
  borderRadius: 'var(--radius-card)',
  color: 'var(--text-primary-light)',
  padding: '12px 14px',
  fontSize: 14,
  width: '100%',
};

const inputClass =
  'w-full text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-shadow duration-150';

export default function HomeInquiryForm() {
  const { t } = useLang();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setFileError(null);
    if (!files.length) return;

    if (selectedFiles.length + files.length > 5) {
      setFileError('You can upload a maximum of 5 files in total.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    for (const file of files) {
      if (file.size > 20 * 1024 * 1024) {
        setFileError(`File "${file.name}" exceeds 20MB limit.`);
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }
    }

    setSelectedFiles((prev) => [...prev, ...files]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemoveSingleFile = (indexToRemove: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
    setFileError(null);
  };

  const handleClearAllFiles = () => {
    setSelectedFiles([]);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const readFileAsBase64 = (file: File): Promise<{ filename: string; content: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Result is in format "data:<mime-type>;base64,<base64-string>"
        const base64Content = result.split(',')[1] || '';
        resolve({
          filename: file.name,
          content: base64Content,
        });
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      // Convert selected files to Base64 attachments
      const attachments = await Promise.all(selectedFiles.map(readFileAsBase64));

      const payload = {
        name: String(data.get('name') ?? '').trim(),
        company: String(data.get('company') ?? '').trim(),
        email: String(data.get('email') ?? '').trim(),
        country: String(data.get('country') ?? '').trim(),
        product: String(data.get('product') ?? '').trim(),
        productSlug: 'homepage-inquiry',
        message: String(data.get('message') ?? '').trim(),
        pageUrl: window.location.href,
        website: String(data.get('website') ?? '').trim(),
        attachments: attachments.length > 0 ? attachments : undefined,
      };

      const response = await fetch(INQUIRY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Inquiry request failed');

      trackEvent('generate_lead', {
        form_location: 'homepage',
        product: payload.product,
        product_slug: payload.productSlug,
        page_path: window.location.pathname,
      });
      setSubmitState('success');
      form.reset();
      handleClearAllFiles();
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusColor = submitState === 'error' ? '#f08a72' : submitState === 'success' ? '#86c98b' : 'var(--text-caption)';

  return (
    <section id="inquiry" className="mt-20 px-6" data-component="HomeInquiryForm">
      <div
        className="max-w-6xl mx-auto p-6 md:p-10"
        style={{ background: 'var(--surface-dark)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)' }}
      >
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="accent-bar" />
            <p className="section-label" style={{ color: 'var(--accent)' }}>{t.home_inquiry_label}</p>
          </div>
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary-light)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            {t.home_inquiry_title}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary-light)' }}>
            {t.home_inquiry_sub}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <label className="flex flex-col gap-1.5">
            <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>{t.field_name} *</span>
            <input name="name" required placeholder={t.field_name} className={inputClass} style={inputStyle} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>{t.field_company}</span>
            <input name="company" placeholder={t.field_company} className={inputClass} style={inputStyle} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>{t.field_email} *</span>
            <input name="email" type="email" required placeholder={t.field_email} className={inputClass} style={inputStyle} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>{t.field_country}</span>
            <input name="country" placeholder={t.field_country} className={inputClass} style={inputStyle} />
          </label>
          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>{t.field_product} *</span>
            <input name="product" required placeholder={t.product_placeholder} className={inputClass} style={inputStyle} />
          </label>
          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>{t.field_message} *</span>
            <textarea name="message" required rows={4} placeholder={t.message_placeholder} className={`${inputClass} resize-y`} style={inputStyle} />
          </label>

          {/* File Attachment Slot */}
          <div className="sm:col-span-2 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-caption)' }}>
              {t.field_attachment}
            </span>
            <div
              className="p-4 rounded border border-dashed flex flex-col gap-3"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderColor: 'var(--border-light)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--surface-mid)', color: 'var(--accent)' }}
                  >
                    <UploadCloud size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: 'var(--text-primary-light)' }}>
                      {selectedFiles.length > 0 ? (
                        <span className="text-emerald-400 font-semibold">
                          {selectedFiles.length} / 5 files selected
                        </span>
                      ) : (
                        t.field_attachment
                      )}
                    </p>
                    <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-caption)' }}>
                      {t.attachment_hint}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept={ACCEPTED_FILE_TYPES}
                    onChange={handleFileChange}
                    className="hidden"
                    id="home-drawing-file"
                    disabled={selectedFiles.length >= 5}
                  />
                  <label
                    htmlFor="home-drawing-file"
                    className={`px-4 py-2 text-xs font-semibold rounded cursor-pointer transition-colors ${
                      selectedFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    style={{
                      background: 'var(--surface-mid)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-primary-light)',
                    }}
                  >
                    {selectedFiles.length === 0 ? 'Browse Files' : selectedFiles.length < 5 ? 'Add More Files' : 'Max 5 Files'}
                  </label>
                  {selectedFiles.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClearAllFiles}
                      className="px-3 py-2 text-xs rounded hover:opacity-80 transition-colors"
                      style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}
                      title="Clear All Files"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </div>

              {/* Render selected files list */}
              {selectedFiles.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-dark)]">
                  {selectedFiles.map((file, idx) => (
                    <div
                      key={`${file.name}-${idx}`}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs"
                      style={{
                        background: 'var(--surface-mid)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-primary-light)',
                      }}
                    >
                      <FileCheck size={13} className="text-emerald-400 flex-shrink-0" />
                      <span className="truncate max-w-[200px]" title={file.name}>
                        {file.name}
                      </span>
                      <span className="text-[10px] text-stone-400 flex-shrink-0">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSingleFile(idx)}
                        className="p-1 hover:text-red-400 text-stone-400 transition-colors ml-1"
                        title="Remove file"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {fileError && <p className="text-xs text-red-400">{fileError}</p>}
          </div>

          <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary px-8 py-4 disabled:cursor-not-allowed disabled:opacity-60"
              style={{ fontSize: 13, cursor: isSubmitting ? 'wait' : 'pointer' }}
            >
              {isSubmitting ? t.inquiry_submitting : t.home_inquiry_submit}
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark px-8 py-4" style={{ fontSize: 13 }}>
              <MessageCircle size={16} />
              {t.contact_whatsapp}
            </a>
          </div>
          <p className="sm:col-span-2 text-xs leading-relaxed" style={{ color: statusColor }} role="status" aria-live="polite">
            {submitState === 'success' ? t.inquiry_success : submitState === 'error' ? t.inquiry_error : t.home_inquiry_hint}
          </p>
        </form>
      </div>
    </section>
  );
}
