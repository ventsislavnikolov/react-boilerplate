import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {},
  clientPrefix: "VITE_",
  client: {
    VITE_SENTRY_DSN: z.string(),
    VITE_API_URL: z.string(),
  },
  runtimeEnv: {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
  },
  emptyStringAsUndefined: true,
});
