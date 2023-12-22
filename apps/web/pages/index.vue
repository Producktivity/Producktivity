<script setup lang="ts">
import { Button, Typography } from '@producktivity/ui';
const count = ref(0);
</script>

<template>
  <Typography variant="title" bold>Producktivity 🪿</Typography>
  <Button label="Click Me!" @click="() => count++" />
  <Typography variant="base">นับ {{ count }}</Typography>
</template>
