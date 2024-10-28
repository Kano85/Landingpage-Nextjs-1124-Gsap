// lib/env.ts
import { envSchema } from '../env.mjs';

const env = envSchema.parse({
  NEXT_PUBLIC_CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  SENTRY_DSN: process.env.SENTRY_DSN,
  // Add other variables here
});

export default env;
