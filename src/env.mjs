import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

// eslint-disable-next-line import/prefer-default-export
export const env = createEnv({
  client: {
    VITE_SENTRY_ORG: z.string().optional(),
    VITE_SENTRY_PROJECT: z.string().optional(),
    VITE_SENTRY_AUTH_TOKEN: z.string().optional(),
    VITE_SENTRY_DSN: z.string().optional(),
    VITE_NEXTAUTH_URL: z.string().optional(),
    VITE_NEXTAUTH_SECRET: z.string().optional(),
    VITE_GOOGLE_CLIENT_ID: z.string().optional(),
    VITE_GOOGLE_CLIENT_SECRET: z.string().optional(),
    VITE_GITHUB_CLIENT_ID: z.string().optional(),
    VITE_GITHUB_SECRET: z.string().optional(),
    VITE_API_URL: z.string().optional(),
    VITE_CHROMATIC_PROJECT_TOKEN: z.string().optional(),
    VITE_NODE_ENV: z.string().optional(),
    VITE_ANALYZE: z.string().optional(),
  },
  runtimeEnv: {
    VITE_SENTRY_ORG: import.meta.env.SENTRY_ORG,
    VITE_SENTRY_PROJECT: import.meta.env.SENTRY_PROJECT,
    VITE_SENTRY_AUTH_TOKEN: import.meta.env.SENTRY_AUTH_TOKEN,
    VITE_SENTRY_DSN: import.meta.env.REACT_APP_SENTRY_DSN,
    VITE_NEXTAUTH_URL: import.meta.env.NEXTAUTH_URL,
    VITE_NEXTAUTH_SECRET: import.meta.env.NEXTAUTH_SECRET,
    VITE_GOOGLE_CLIENT_ID: import.meta.env.GOOGLE_CLIENT_ID,
    VITE_GOOGLE_CLIENT_SECRET: import.meta.env.GOOGLE_CLIENT_SECRET,
    VITE_GITHUB_CLIENT_ID: import.meta.env.GITHUB_CLIENT_ID,
    VITE_GITHUB_SECRET: import.meta.env.GITHUB_SECRET,
    VITE_API_URL: import.meta.env.REACT_APP_API_URL,
    VITE_CHROMATIC_PROJECT_TOKEN: import.meta.env.CHROMATIC_PROJECT_TOKEN,
    VITE_NODE_ENV: import.meta.env.NODE_ENV,
    VITE_ANALYZE: import.meta.env.ANALYZE,
  },
});
