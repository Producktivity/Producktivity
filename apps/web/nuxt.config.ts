import { defineNuxtConfig } from 'nuxt/config';
import { join } from 'path';
import { workspaceRoot } from '@nx/devkit';

export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    download: true,
    fontsPath: 'fonts',
    families: {
      Inter: [400, 700],
      'Noto Sans Thai Looped': [400, 700],
    },
  },
  css: ['@producktivity/ui/style.css'],
  experimental: {
    componentIslands: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
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
