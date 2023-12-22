<script setup lang="ts">
interface Props {
  bold?: boolean;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <p class="font-sans" :class="{ 'font-bold': props.bold }">
    <slot />
  </p>
</template>
