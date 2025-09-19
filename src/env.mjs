import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // Define your server-side environment variable schemas here.
    RESEND_API_KEY: z.string().min(1),
  },
  client: {
    // Define your client-side environment variable schemas here.
    // Must be prefixed with NEXT_PUBLIC_
  },
  runtimeEnv: {
    // Manually map the environment variables to their schemas.
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
});
