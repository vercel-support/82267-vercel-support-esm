import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import mix_raw, { vercelAdapter } from "vite-plugin-mix";

const mix = mix_raw as typeof mix_raw & { default: typeof mix_raw };

export default defineConfig({
  plugins: [
    solidPlugin(),
    mix.default({
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
