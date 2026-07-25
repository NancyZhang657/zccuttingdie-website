# Setup Checklist

This project is delivered in stages so beginners can see the site before cloud setup.

## 1. Local Preview

- Build locally with `workctl icbu storefront site-build --cwd <project>`.
- Start preview with `workctl icbu storefront site-preview-start --cwd <project> --mode vite`.
- Keep the preview running until a public URL is verified.

## 2. Supabase Activation

Use this only when the site needs real products, inventory, orders, auth, or user-owned data.

You only need to provide safe inputs:

1. Open https://supabase.com/dashboard/projects and paste the project page URL.
2. Type the database password only into the local CLI prompt when asked.
3. Enter public `anon public` key or secrets through the plugin prompt helpers, not chat.

The Agent should use MCP tools (`accio-mcp-cli call supabase <tool>`) for cloud operations
such as `start_supabase_auth`, `list_supabase_projects`, `get_supabase_project`, and `apply_migration`.
The CLI resolver (`supabase-cli.sh`) is used only for local dev stack (init, start, status, migration new, db diff).

## 3. Stripe Activation

Use this only when real test-mode or live payments are needed. Never paste `sk_...` or
`whsec_...` values in chat.

## 4. Vercel Deployment

Use Vercel Preview first for a public URL. Production deploys require explicit confirmation.

## Completion

Final handoff should include `Access:` with either a public URL, a still-running local preview URL,
or a blocker plus the exact next action.
