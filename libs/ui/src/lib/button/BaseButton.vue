<script setup lang="ts">
interface Props {
  label: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <button
    class="px-4 py-2 text-white rounded-lg"
    :class="[
      props.disabled ? 'bg-gray-500 hover:cursor-default' : 'bg-blue-500',
    ]"
  >
    {{ props.label }}
  </button>
</template>
