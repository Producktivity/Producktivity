<script setup lang="ts">
import { variants } from "./typography";
import type { TypographyVariant } from "./typography";

interface Props {
  bold?: boolean;
  variant?: TypographyVariant;
}

const props = withDefaults(defineProps<Props>(), {
  bold: false,
  variant: "base",
});
</script>

<template>
  <p
    class="font-sans"
    :class="[{ 'font-bold': props.bold }, variants[props.variant]]"
  >
    <slot />
  </p>
</template>
