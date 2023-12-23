import { defineNuxtConfig } from 'nuxt/config';
import { join } from 'path';
import { workspaceRoot } from '@nx/devkit';

export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  css: ['@producktivity/ui/style.css'],
  experimental: {
    componentIslands: true,
    asyncEntry: true,
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+Thai+Looped:wght@400;700&display=optional', media: 'all', as: 'style', onload: 'this.onload=null;this.rel="stylesheet"', crossorigin: '' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'theme-color', content: '#ffffff' }],
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Certificate Generator',
      short_name: 'Certificate Generator',
      description: 'A complete certificate generator',
      lang: 'en',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: 'icons/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: 'icons/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'icons/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: 'icons/apple-touch-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
    },
  },
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages',
    output: {
      dir: '../../dist/apps/web',
    },
  },
  vite: {
    cacheDir: '../../node_modules/.vite/apps/web',
    preview: {
      port: 4200,
      host: 'localhost',
    },
  },
  typescript: {
    typeCheck: true,
  },
  /**
   * aliases set here will be added to the auto generate tsconfig by Nuxt
   * https://nuxt.com/docs/guide/directory-structure/tsconfig
   **/
  alias: getMonorepoTsConfigPaths('../../tsconfig.base.json'),
});

/**
 * read the compilerOptions.paths option from a tsconfig and return as aliases for Nuxt
 **/
function getMonorepoTsConfigPaths(tsConfigPath: string) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const tsPaths = require(tsConfigPath)?.compilerOptions?.paths as Record<string, string[]>;

  const alias: Record<string, string> = {};
  if (tsPaths) {
    for (const p in tsPaths) {
      // '@org/something/*': ['libs/something/src/*'] => '@org/something': '{pathToWorkspaceRoot}/libs/something/src'
      alias[p.replace(/\/\*$/, '')] = join(workspaceRoot, tsPaths[p][0].replace(/\/\*$/, ''));
    }
  }

  return alias;
}
