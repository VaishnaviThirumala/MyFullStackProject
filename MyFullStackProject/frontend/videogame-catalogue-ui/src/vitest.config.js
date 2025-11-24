import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,      // ✅ makes describe, it, beforeEach, etc. available
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
  },
});
