import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 10000,
    coverage: {
      reporter: ['json', 'text'],
      exclude: ['test', 'vite.config.ts'],
    },
  },
})
