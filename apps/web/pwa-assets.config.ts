import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
  headLinkOptions: {
    preset: '2023',
  },
  preset: {
    transparent: {
      sizes: [64, 72, 96, 128, 144, 152, 192, 384, 512],
      favicons: [[32, 'favicon.ico'], [192, 'favicon-192x192.ico']],
    },
    maskable: {
      sizes: [512],
    },
    apple: {
      sizes: [180],
    },
  },
  images: ['public/icons/logo.png'],
});
