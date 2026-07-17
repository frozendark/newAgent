# Vue 3 Pinia Web

A starter project for building Vue 3 applications with Pinia, Vue Router, Vite, and TypeScript.

## Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint and formatting:

```bash
npm run lint
npm run format
npm run type-check
```

## Project Structure

- `src/` - application source code
- `src/components/` - reusable Vue components
- `src/views/` - page/view components for routes
- `src/stores/` - Pinia stores
- `src/router/` - Vue Router configuration
- `src/api/` - API client and service helpers
- `src/types/` - TypeScript type definitions
- `public/` - static assets

## Creating New Components

1. Add a `.vue` component to `src/components/`.
2. Import and use it in other components or views.

Example:

```ts
import MyComponent from '@/components/MyComponent.vue';
```

## Creating New Stores

1. Define a store using `defineStore` in `src/stores/`.
2. Export it from `src/stores/index.ts`.
3. Use it in components with `useXStore()`.

Example:

```ts
import { useAppStore } from '@/stores';
const app = useAppStore();
```

## Creating New Routes

1. Add view components to `src/views/`.
2. Register them in `src/router/index.ts`.
3. Use `<router-link>` and `<router-view>` for navigation.

## Making API Calls

Use the configured Axios client in `src/api/client.ts` and service helpers in `src/api/service.ts`.

Example:

```ts
import { getExample } from '@/api/service';

const result = await getExample('/example');
```

## Environment Variables

The project uses Vite environment variables starting with `VITE_`.

- `.env` - default variables
- `.env.development` - development-specific values
- `.env.production` - production-specific values

Access variables with `import.meta.env.VITE_API_BASE_URL`.
