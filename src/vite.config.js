import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react';`, // تزریق React به تمام فایل‌های JSX
    loader: {
      ".js": "jsx", // تنظیم loader برای فایل‌های با پسوند .js به jsx
    },
  },
});
