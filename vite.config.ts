import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import mix, { vercelAdapter } from "vite-plugin-mix";

export default defineConfig({
  plugins: [
    solidPlugin(),
    mix({
      handler: "./src/api/index.ts",
      adapter: vercelAdapter()
    })
  ],

  build: {
    target: 'esnext',
    polyfillDynamicImport: false,

    rollupOptions: {
      output: {
        format: "es"
      }
    }
  }
});
