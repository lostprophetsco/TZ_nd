<template>
  <div class="form-login m-form">
    <form class="form-login__form" @submit.prevent="submitHandler" autocomplete="off">
      <div class="form-login__form-default m-form__default">
        <div v-if="props.defaultTitle" class="m-form__default-title">{{ props.defaultTitle }}</div>

        <div class="m-form__default-body">
          <InputText
            v-model="formData.email"
            placeholder="Введите значение"
            label="Email"
            :error="v$.email.$error"
            :valid="!v$.email.$invalid"
            @input="v$.email.$touch()"
            @change="v$.email.$touch()"
            @blur="!v$.email.$model && v$.email.$touch()"
          >
            <template #error>
              <span v-for="(error, i) in v$.email.$errors" :key="`error-${i}`">
                {{ error.$message }}
              </span>
            </template>
          </InputText>

          <InputText
            v-model="formData.password"
            label="Пароль"
            name="password"
            type="password"
            placeholder="Введите пароль"
            :error="v$.password.$error"
            :valid="!v$.password.$invalid"
            @input="v$.password.$touch()"
            @change="v$.password.$touch()"
            @blur="!v$.password.$model && v$.password.$touch()"
          >
            <template #error>
              <span v-for="(error, i) in v$.password.$errors" :key="`error-${i}`">
                {{ error.$message }}
              </span>
            </template>
          </InputText>

          <div class="m-form__form-footer">
            <slot name="footerText">
              <div class="m-form__footer-text">
                У вас нет аккаунта?
                <a href="#" class="link">Зарегистрируйтесь</a>
              </div>
            </slot>

            <Button
              tag="button"
              type="submit"
              :disabled="v$.$invalid || props.loading"
              :loading="props.loading"
            >
              <template #loading> В процессе </template>
              <slot name="buttonText">Войти</slot>
            </Button>
          </div>
        </div>
      </div>

      <div v-if="props.error" class="m-form__error">
        <slot name="error">{{ props.error }}</slot>
      </div>

      <div v-if="props.success" class="m-form__success">
        <slot name="success">{{ props.success }}</slot>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// vue
import { computed, ref } from 'vue';

// Components
import Button from '@/components/atoms/buttons/button.vue';
import InputText from '@/components/atoms/controls/inputs/inputDefault.vue';

// Types
import type { IFormProps, IFormEmits } from '../form.types';
import type { IFormLoginModel } from './formLogin.model.ts';

// Vuelidate
import { useVuelidate } from '@vuelidate/core';

// Validation messages
import validations from '../form.validation.messages';

// Models
import { EFormStates, EFormStateMessages } from '../form.types.ts';
import { FormLoginModel } from './formLogin.model.ts';

const emit = defineEmits<IFormEmits<IFormLoginModel>>();
const props = withDefaults(defineProps<IFormProps>(), {
  state: EFormStates.DEFAULT,
  loading: false,
  defaultTitle: EFormStateMessages.DEFAULT_TITLE_LOGIN,
});

const formData = ref(new FormLoginModel());

/**
 * @description Validation rules
 * @returns {Object}
 */
const rules = computed(() => {
  return {
    email: { required: validations.required(), email: validations.email },
    password: { required: validations.required() },
  };
});

const v$ = useVuelidate(rules, formData);

/**
 * @description Form submit handler
 */
const submitHandler = () => {
  v$.value.$touch();

  if (v$.value.$invalid) return;

  emit('submit', formData.value);
};
</script>
