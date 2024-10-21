<template>
  <Button
    >Вход
    <template #icon>
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <use :href="`#${iconLogin}`" />
      </svg>
    </template>
  </Button>

  <Button modifier="rounded">
    Вход
    <template #icon>
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <use :href="`#${iconAdd}`" />
      </svg>
    </template>
  </Button>

  <Button disabled>Test</Button>
</template>
<script setup lang="ts">
// Imports
import iconAdd from './assets/images/icons/add.svg';
import iconLogin from './assets/images/icons/login.svg';

import Button from './components/atoms/buttons/button.vue';
</script>
