<script setup lang="ts">
import { sizes } from "./button";
import type { ButtonSize } from "./button";

interface Props {
  label: string;
  disabled?: boolean;
  size?: ButtonSize;
}

const props = withDefaults(defineProps<Props>(), {
  size: "base",
});
</script>

<template>
  <button
    class="text-white rounded-lg"
    :class="[
      props.disabled ? 'bg-gray-500 hover:cursor-default' : 'bg-blue-700',
      sizes[props.size],
    ]"
  >
    {{ props.label }}
  </button>
</template>
