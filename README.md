# Frontend Template

A production-ready Next.js starter for modern web applications. Ships with a complete API layer, typed forms, global + server state, a component library, full i18n support, and a testing setup ready to go on day one.

---

## Tech Stack

| Category         | Technology                                                                                               |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org/) (App Router, React Compiler)                                           |
| Language         | [TypeScript 5](https://www.typescriptlang.org/) — strict mode                                            |
| Styling          | [Tailwind CSS 4](https://tailwindcss.com/)                                                               |
| State Management | [Redux Toolkit](https://redux-toolkit.js.org/) + [redux-persist](https://github.com/rt2zz/redux-persist) |
| Server State     | [TanStack Query v5](https://tanstack.com/query/latest)                                                   |
| Forms            | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)                                |
| HTTP Client      | [Axios](https://axios-http.com/) with middleware pipeline                                                |
| Icons            | [Lucide React](https://lucide.dev/)                                                                      |
| Notifications    | [React Toastify](https://fkhadra.github.io/react-toastify/)                                              |
| i18n             | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)                        |
| Package Manager  | [pnpm](https://pnpm.io/)                                                                                 |

---

## Features

- **App Router** — file-based routing with layouts, nested routes, and route groups
- **API middleware pipeline** — Axios instance with request IDs, session injection, error classification, retry with exponential back-off, and performance tracking
- **Type-safe forms** — React Hook Form + Zod with co-located schemas and reusable field components
- **Global state** — Redux Toolkit slices for auth and navigation history, persisted with redux-persist
- **Server state** — TanStack Query for data fetching, caching, and mutations via thin `useApiQuery` / `useApiMutation` wrappers
- **Auth skeleton** — login flow, `SessionManager`, and a login-listener response interceptor included
- **Dark mode** — theme toggle with script-injected class to avoid flash on load
- **i18n** — i18next with language auto-detection, HTTP backend, and a `LanguageSwitch` component (pl / en / de)
- **Component library** — Accordion, Button, Dropdown, Icon, Loader, Modal, RadioSelect, Table, Tabs, ThemeToggle, Toggle, and full Form field set, each with co-located `.styles.ts`
- **Navigation history** — `useRedirect` hook manages a Redux-backed stack so `goBack()` works reliably across the whole app
- **Pagination** — `usePagination` hook + `TablePagination` component with cursor support
- **Polish utilities** — validators (NIP, PESEL, REGON, NRB, Luhn) and formatters (amounts, dates, bank accounts) included out of the box

---

## Getting Started

### Use this template

Click **"Use this template"** on GitHub, or clone directly:

```bash
git clone https://github.com/grochowskik/frontend-template.git my-app
cd my-app
```

### Install dependencies

```bash
pnpm install
```

### Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local` — see [Environment Variables](#environment-variables) for reference.

### Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The `/dashboard` route shows a live showcase of every component.

---

## Docker

### Production build

```bash
docker compose up --build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Development (hot reload)

```bash
docker compose --profile dev up app-dev
```

Source files are volume-mounted so changes are reflected instantly without rebuilding the image.

### Manual Docker commands

```bash
# Build
docker build -t frontend-template .

# Run
docker run -p 3000:3000 frontend-template
```

> The production image uses Next.js [standalone output](https://nextjs.org/docs/app/api-reference/config/next-config-js/output) for a minimal footprint — only the files needed at runtime are included.

---

## Project Structure

```
src/
 ├── app/                  # Next.js App Router pages and layouts
 │    ├── dashboard/       # Component showcase — forms, tables, modals
 │    ├── login/           # Login page with Zod-validated form
 │    └── ...              # Other route segments
 ├── components/
 │    ├── common/          # Accordion, Button, Dropdown, Icon, Loader,
 │    │                    # Modal, RadioSelect, Table, Tabs, ThemeToggle, Toggle
 │    └── layout/          # Details, Form (+ field set), Navbar, Page, Section
 ├── config/               # Navigation definitions
 ├── core/
 │    ├── api/             # Domain API hooks (notes example)
 │    └── middleware/      # RequestClass, ErrorClassifier, SessionManager,
 │                         # RequestIdGenerator, useApiQuery, useApiMutation
 ├── hooks/                # useClickOutside, useError, useEscapeKey,
 │                         # useNotification, usePagination, useRedirect,
 │                         # useTablePageSize
 ├── lib/                  # i18n initialisation
 ├── providers/            # Redux, React Query, and root Providers wrapper
 ├── redux/                # Store + slices (user, pageParams)
 └── utils/
      ├── formatters/      # Amounts, bank accounts, cards, dates, NIP, phones
      ├── helpers/         # cn, sanitizeAmount, toBool, replaceComma, base64
      └── validators/      # Email, phone, card (Luhn), NRB, NIP, PESEL, REGON
```

---

## Testing

The template ships with a complete testing setup.

### Unit & component tests — Vitest + React Testing Library

```bash
pnpm test             # run once (CI)
pnpm test:watch       # watch mode
pnpm test:coverage    # with v8 coverage report
```

### E2E tests — Playwright

```bash
pnpm test:e2e         # headless, all browsers
pnpm test:e2e:ui      # interactive Playwright UI
```

The dev server starts automatically when running E2E tests locally.

### What's covered

| Layer        | Coverage                                                               |
| ------------ | ---------------------------------------------------------------------- |
| Validators   | email, phone, Luhn card, NRB, NIP, PESEL, REGON                        |
| Formatters   | amounts, dates, bank accounts, card numbers, NIP, phone numbers        |
| Helpers      | `cn`, `sanitizeAmount`, `toBool`, `replaceComma`                       |
| Redux slices | `user`, `pageParams` — all actions, reducers, selectors                |
| Middleware   | `ErrorClassifier`, `SessionManager`, `RequestIdGenerator`              |
| Hooks        | `usePagination`, `useClickOutside`, `useEscapeKey`, `useTablePageSize` |
| API hooks    | `useNotesList`, `useCreateNote`, `useUpdateNote`, `useCancelNote`      |
| Components   | Button, Toggle, Modal, Accordion, Tabs, FormInput, LoginForm           |
| E2E          | Home navigation, login validation flow, dashboard interactions         |

API calls in unit tests are intercepted by [MSW](https://mswjs.io/) — no real network traffic.

---

## Scripts

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `pnpm dev`           | Start the development server    |
| `pnpm build`         | Build for production            |
| `pnpm start`         | Start the production server     |
| `pnpm lint`          | Run ESLint                      |
| `pnpm test`          | Run unit tests (Vitest)         |
| `pnpm test:watch`    | Unit tests in watch mode        |
| `pnpm test:coverage` | Unit tests with coverage report |
| `pnpm test:e2e`      | Run E2E tests (Playwright)      |
| `pnpm test:e2e:ui`   | Playwright interactive UI       |

---

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> Variables prefixed with `NEXT_PUBLIC_` are bundled into the client. Keep secrets server-side only.

---

## Customization

| Goal               | How                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------- |
| Add a route        | Create a folder under `src/app/` following App Router conventions                      |
| Add an API module  | Add typed hooks in `src/core/api/` using `useApiQuery` / `useApiMutation`              |
| Add Redux state    | Create a slice in `src/redux/slice/` and register it in `src/redux/store.ts`           |
| Add a UI component | Place it in `src/components/common/` with a co-located `.styles.ts`                    |
| Add a language     | Add a JSON file to `public/locales/` and register the locale code in `src/lib/i18n.ts` |

---

## License

MIT
