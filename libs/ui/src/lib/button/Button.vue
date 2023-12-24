<script setup lang="ts">
import { sizes, variants, shapes } from './button';
import type { ButtonSize, ButtonVariant, ButtonShape } from './button';

interface Props {
  disabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
  variant: 'primary',
  shape: 'base',
});
</script>

<template>
  <div class="relative inline-flex">
    <div class="before:hover:bg-surface-on/[.08] before:inset-0 before:absolute absolute inset-0 overflow-hidden" />
    <button :class="[variants[props.disabled ? 'disabled' : props.variant], sizes[props.size], shapes[props.shape]]">
      <slot />
    </button>
  </div>
</template>
