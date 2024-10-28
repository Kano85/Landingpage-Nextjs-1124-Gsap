// env.mjs
import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_CLERK_FRONTEND_API: z.string().url(),
  CLERK_SECRET_KEY: z.string(),
  SENTRY_DSN: z.string().url().optional(),
  // Add other environment variables here
});
