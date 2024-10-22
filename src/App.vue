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
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <use :href="`#${iconAdd}`" />
    </svg>
  </Button>

  <Button disabled>Test</Button>

  <a href="#" class="link">Зарегистрируйтесь</a>

  <InputText
    v-model="test"
    placeholder="Значение"
    label="Заголовок"
    :counter="{ visible: true, max: 10 }"
  >
  </InputText>

  <InputText v-model="test2" placeholder="Введите значение" label="Заголовок" type="password">
  </InputText>

  <InputTextarea
    v-model="test3"
    placeholder="Введите значение"
    label="Заголовок"
    :rows="10"
    :counter="{ visible: true, max: 10 }"
    error="Сообщение ошибки Сообщение ошибки"
  ></InputTextarea>
</template>
<script setup lang="ts">
// Imports
import { ref } from 'vue';

import iconAdd from './assets/images/icons/add.svg';
import iconLogin from './assets/images/icons/login.svg';

// Components
import Button from './components/atoms/buttons/button.vue';
import InputText from './components/atoms/controls/inputs/inputDefault.vue';
import InputTextarea from './components/atoms/controls/textarea/textareaDefault.vue';

const test = ref(null);
const test2 = ref(null);
const test3 = ref(null);
</script>
