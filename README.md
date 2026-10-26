# Metronic Next.js Multi-Dashboard Starter

A reusable frontend starter built on the original **Metronic 9.2.5** Next.js template. It keeps the Metronic layouts, dashboard demos, UI components, theme tokens, icons, and demo pages, while removing the demo backend and authentication integration.

Use this starter when you want to pick a Metronic dashboard layout per project without rebuilding the UI foundation.

## Included

- Next.js 15 App Router with TypeScript
- React 19 and Tailwind CSS 4
- All 10 Metronic dashboard layouts: `demo1` through `demo10`
- Dashboard content for Demo1-Demo5, reused by Demo6-Demo10 as in the original demo switcher
- Account, public profile, network, store client, and store admin demo pages
- Full reusable UI kit in `components/ui`
- Theme, settings, tooltip, i18n, query, and store-client module providers
- Metronic CSS, fonts, icons, and media assets
- Demo documentation page at `documentation.html`

## Not Included

This is a frontend starter, not a full-stack application:

- No login, signup, session, or NextAuth integration
- No database, Prisma, migrations, or ORM
- No S3/Spaces upload integration
- No SMTP/email service
- No reCAPTCHA integration
- No API routes

The screens under `/auth/*` are static UI demos only. The app is public and has no route guard.

## Requirements

- Node.js 20 or newer
- pnpm 10 or newer

This repository uses pnpm and `pnpm-lock.yaml`. `package-lock.json` is intentionally not included.

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Dashboard Selection

The active dashboard is selected in one place. Create `.env.local` from `.env.example` and set:

```env
NEXT_PUBLIC_DASHBOARD=demo3
```

Valid values:

```text
demo1
demo2
demo3
demo4
demo5
demo6
demo7
demo8
demo9
demo10
```

You can also change the fallback in `config/dashboard.config.ts`:

```ts
export const DEFAULT_DASHBOARD: DashboardId = 'demo3';
```

The selected ID controls both the layout and the dashboard page. Restart the dev server after changing the env value, and rebuild for production.

Mapping for the reused dashboard content:

| Layout | Dashboard content |
| --- | --- |
| demo1 | Demo1 |
| demo2 | Demo2 |
| demo3 | Demo3 |
| demo4 | Demo4 |
| demo5 | Demo5 |
| demo6 | Demo4 |
| demo7 | Demo2 |
| demo8 | Demo4 |
| demo9 | Demo2 |
| demo10 | Demo3 |

## Environment Variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_DASHBOARD` | `demo3` | Selects the active Metronic dashboard layout |
| `NEXT_PUBLIC_BASE_PATH` | `/` | Optional subpath prefix for assets and links |

No database, SMTP, S3, OAuth, or reCAPTCHA variables are required.

## Scripts

```bash
pnpm dev        # Start the development server with Turbopack
pnpm build      # Create a production build
pnpm start      # Run the production build
pnpm lint       # Run ESLint
pnpm typecheck  # Run TypeScript without emitting files
pnpm format     # Format with Prettier
```

## Project Structure

```text
app/
  (protected)/          Demo pages and the active dashboard
  components/layouts/   Demo1-Demo10 layout shells
  components/partials/  Shared topbar, sidebar, and menu parts
components/
  ui/                   Reusable UI primitives
  keenicons/            Metronic icon assets
config/
  dashboard.config.ts   Active dashboard and page mapping
  menu.config.tsx       Demo navigation
  settings.config.ts    Theme and layout defaults
providers/              Theme, settings, i18n, query, and modules
css/                    Tailwind entry point and Metronic demo styles
public/media/           Demo images and media
```

## Deployment

```bash
pnpm build
pnpm start
```

If the app is deployed under a subpath, set `NEXT_PUBLIC_BASE_PATH` to that subpath, for example `/starter/`.

## Metronic Attribution

This starter is based on Metronic by [Keenthemes](https://www.keenthemes.com/). Keep the Metronic attribution and license requirements when reusing or redistributing the template. The original documentation entry point is available at `documentation.html`.

- Metronic: https://www.keenthemes.com/
- Documentation: https://docs.keenthemes.com/metronic-nextjs
- Support: support@keenthemes.com
