<script setup lang="ts">
const route = useRoute();

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: route.meta.title ? `${route.meta.title} - Certificate Generator` : `Certificate Generator`,
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'icons/favicon.ico',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: 'icons/favicon-192x192.ico',
      sizes: '192x192',
    },
  ],
  meta: [
    {
      property: 'og:title',
      content: route.meta.title ? `${route.meta.title} - Certificate Generator` : `Certificate Generator`,
    },
    {
      name: 'description',
      content: (route.meta.description as string) || 'A complete certificate generator.',
    },
    {
      property: 'og:description',
      content: (route.meta.description as string) || 'A complete certificate generator.',
    },
  ],
});
</script>

<template>
  <slot />
</template>
