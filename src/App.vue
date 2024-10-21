<template>
  <Button>Test</Button>

  <Button modifier="rounded">
    <template #icon></template>
  </Button>

  <Button disabled>Test</Button>
</template>
<script setup lang="ts">
// Imports
import Button from './components/atoms/buttons/button.vue';
</script>
