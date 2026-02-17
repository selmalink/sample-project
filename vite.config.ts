import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitest test config is not part of Vite's strict type in some setups; cast to any to avoid TS errors
  // (Vitest will pick up this field at runtime)
  ...(/* eslint-disable @typescript-eslint/no-explicit-any */ ({} as any)),
  test: {
    // Use jsdom to simulate a browser environment for React tests
    environment: "jsdom",
    // Enable vite/vitest global APIs like `describe`/`it`/`expect`
    globals: true,
    // File to run before tests to install RTL matchers, etc.
    setupFiles: "./src/test/setup.ts",
    // Which files to include as tests
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    // Coverage provider and reporters
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});
