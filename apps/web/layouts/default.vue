<template>
  <slot />
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: route.meta.title
    ? `${route.meta.title} - Certificate Generator`
    : `Certificate Generator`,
  meta: [
    {
      property: 'og:title',
      content: route.meta.title
        ? `${route.meta.title} - Certificate Generator`
        : `Certificate Generator`,
    },
    {
      name: 'description',
      content:
        (route.meta.description as string) ||
        'A complete certificate generator.',
    },
    {
      property: 'og:description',
      content:
        (route.meta.description as string) ||
        'A complete certificate generator.',
    },
  ],
});
</script>
