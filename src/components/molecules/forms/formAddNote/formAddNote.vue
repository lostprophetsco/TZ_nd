<template>
  <div class="add-note m-form">
    <form class="add-note__form" @submit.prevent="submitHandler" autocomplete="off">
      <div class="add-note__form-default m-form__default">
        <div v-if="props.defaultTitle" class="m-form__default-title">{{ props.defaultTitle }}</div>

        <div class="m-form__default-body">
          <InputText
            v-model="formData.title"
            placeholder="Введите название"
            label="Название заметки"
            :counter="{ visible: true, max: 100 }"
            :error="v$.title.$error"
            :valid="!v$.title.$invalid"
            @input="v$.title.$touch()"
            @change="v$.title.$touch()"
            @blur="!v$.title.$model && v$.title.$touch()"
          >
            <template #error>
              <span v-for="(error, i) in v$.title.$errors" :key="`error-${i}`">
                {{ error.$message }}
              </span>
            </template>
          </InputText>

          <Textarea
            v-model="formData.text"
            label="Текст заметки"
            placeholder="Введите текст"
            :rows="10"
            :counter="{ visible: true, max: 500 }"
            :error="v$.text.$error"
            :valid="!v$.text.$invalid"
            @input="v$.text.$touch()"
            @change="v$.text.$touch()"
            @blur="!v$.text.$model && v$.text.$touch()"
          >
            <template #error>
              <span v-for="(error, i) in v$.text.$errors" :key="`error-${i}`">
                {{ error.$message }}
              </span>
            </template>
          </Textarea>

          <div class="m-form__form-footer">
            <slot name="footerText"> </slot>

            <Button
              tag="button"
              type="submit"
              :disabled="v$.$invalid || props.loading"
              :loading="props.loading"
            >
              <template #loading> В процессе </template>
              <slot name="buttonText">Добавить</slot>
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
import Textarea from '@/components/atoms/controls/textarea/textareaDefault.vue';

// Types
import type { IFormProps, IFormEmits } from '../form.types';
import type { IFormAddNoteModel } from './formAddNote.model.ts';

// Vuelidate
import { useVuelidate } from '@vuelidate/core';

// Validation messages
import validations from '../form.validation.messages';

// Models
import { EFormStates, EFormStateMessages } from '../form.types.ts';
import { FormAddNoteModel } from './formAddNote.model.ts';

const emit = defineEmits<IFormEmits<IFormAddNoteModel>>();
const props = withDefaults(defineProps<IFormProps>(), {
  state: EFormStates.DEFAULT,
  loading: false,
  defaultTitle: EFormStateMessages.DEFAULT_TITLE_NOTE_ADD,
});

const formData = ref(new FormAddNoteModel());

/**
 * @description Validation rules
 * @returns {Object}
 */
const rules = computed(() => {
  return {
    title: { required: validations.required() },
    text: { required: validations.required() },
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
