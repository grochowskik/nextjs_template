# Frontend Template

A production-ready Next.js starter template for quickly bootstrapping modern web applications with a curated set of tools and conventions built in.

## Tech Stack

| Category         | Technology                                                                                               |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org/) (App Router)                                                           |
| Language         | [TypeScript 5](https://www.typescriptlang.org/)                                                          |
| Styling          | [Tailwind CSS 4](https://tailwindcss.com/)                                                               |
| State Management | [Redux Toolkit](https://redux-toolkit.js.org/) + [redux-persist](https://github.com/rt2zz/redux-persist) |
| Server State     | [TanStack Query v5](https://tanstack.com/query/latest)                                                   |
| Forms            | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)                                |
| HTTP Client      | [Axios](https://axios-http.com/)                                                                         |
| Icons            | [Lucide React](https://lucide.dev/)                                                                      |
| Notifications    | [React Toastify](https://fkhadra.github.io/react-toastify/)                                              |
| Package Manager  | [pnpm](https://pnpm.io/)                                                                                 |

## Features

- **App Router** — file-based routing with layouts, nested routes, and route groups
- **API layer** — Axios instance with request/response middleware, session management, and error classification
- **Type-safe forms** — React Hook Form integrated with Zod schema validation
- **Global state** — Redux Toolkit store with persistence across sessions
- **Server state** — TanStack Query for data fetching, caching, and mutations
- **Auth-ready** — login flow, session manager, and login listener middleware included
- **Dark mode** — theme toggle with `ThemeToggle` component
- **i18n-ready** — `useLanguage` hook for internationalization support
- **Component library** — pre-built UI components with co-located `.styles.ts` files
- **Pagination** — `usePagination` hook and `TablePagination` component
- **Navigation history** — `useRedirect` hook manages a Redux-backed navigation stack, enabling reliable `goBack()` across the app

## Getting Started

### 1. Use this template

Click **"Use this template"** on GitHub to create a new repository, or clone directly:

```bash
git clone https://github.com/grochowskik/frontend-template.git my-app
cd my-app
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Update the variables in `.env.local` as needed (see [Environment Variables](#environment-variables) below).

### 4. Start the development server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Project Structure

```
src/
 ├── app/                  # Next.js App Router pages and layouts
 │    ├── dashboard/       # Example dashboard page with form, table, modal
 │    ├── login/           # Authentication page
 │    └── ...              # Other route segments
 ├── components/
 │    ├── common/          # Accordion, Button, Icon, Input, Loader, Modal, Table, Tabs, ThemeToggle
 │    └── layout/          # Details, Form, Navbar, Page
 ├── config/               # App-wide config and navigation definitions
 ├── core/                 # Axios instance, request middleware, API hooks
 ├── hooks/                # Shared custom hooks
 ├── providers/            # React context providers (Query, Redux)
 ├── redux/                # Redux store and slices
 └── utils/                # Utility functions
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Keep secrets server-side only.

## Scripts

| Command      | Description                  |
| ------------ | ---------------------------- |
| `pnpm dev`   | Start the development server |
| `pnpm build` | Build for production         |
| `pnpm start` | Start the production server  |
| `pnpm lint`  | Run ESLint                   |

## Customization

This template is intentionally minimal. Common extension points:

- **Add routes** — create folders under `src/app/` following Next.js App Router conventions
- **Add API endpoints** — add typed hooks in `src/core/api/` using `useApiQuery` / `useApiMutation`
- **Add Redux state** — create new slices in `src/redux/slice/`
- **Add components** — place reusable UI in `src/components/common/` with a co-located `.styles.ts` file

## License

MIT
