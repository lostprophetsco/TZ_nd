<template>
  <div class="form-group" :class="controlClasses">
    <div :class="`${props.cssClass}__group`">
      <label v-if="props.label" :for="props.id || generatedUid" :class="`${props.cssClass}__label`">
        {{ props.label }}
      </label>

      <textarea
        v-model="model"
        :id="props.id || generatedUid"
        :rows="props.rows"
        :placeholder="defaultPlaceholder"
        :disabled="props.disabled"
        :class="`${props.cssClass}__textarea`"
        :name="props.name"
        autocomplete="off"
        v-on="listeners"
        ref="textareaField"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      ></textarea>
    </div>

    <div v-if="!!slots.placeholder" :class="`${props.cssClass}__placeholder`">
      <slot name="placeholder" />
    </div>

    <div v-if="props.error || props.counter.visible" :class="`${props.cssClass}__footer`">
      <div v-if="props.error" :class="`${props.cssClass}__error`">
        <slot name="error">
          {{ props.error }}
        </slot>
      </div>

      <div v-if="props.counter.visible" :class="`${props.cssClass}__counter`">
        {{ symbolsTyped }}<template v-if="props.counter.max"> / </template>{{ props.counter.max }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, computed, Ref, onMounted } from 'vue';

// Types
import type { ITextareaProps, ITextareaEmits, ITextareaSlots } from './textareaDefault';

// Shared
import uid from '@/shared/generators/uid';

const props = withDefaults(defineProps<ITextareaProps>(), {
  cssClass: 'textarea-default',
  disabled: false,
  valid: false,
  error: false,
  rows: 3,
  counter: () => ({ visible: false }),
});

const symbolsTyped = ref(0);
const textareaField = ref<HTMLTextAreaElement | null>(null);

const emit = defineEmits<ITextareaEmits>();
const slots = defineSlots<ITextareaSlots>();

const generatedUid = uid();

const focused: Ref<boolean> = ref(false);
const hover: Ref<boolean> = ref(false);

const controlClasses = computed(() => {
  return [
    props.cssClass,
    {
      [`${props.cssClass}--${props.theme}`]: props.theme,
      [`${props.cssClass}--${props.modifier}`]: props.modifier,
      [`${props.cssClass}--disabled`]: props.disabled,
      [`${props.cssClass}--filled`]: !!props.modelValue,
      [`${props.cssClass}--valid`]: props.valid,
      [`${props.cssClass}--invalid`]: props.error,
      [`${props.cssClass}--focused`]: focused.value,
      [`${props.cssClass}--hover`]: hover.value && !focused.value,
    },
  ];
});

/**
 * @description Computed property for custom v-model
 * @type {WritableComputedRef<Date & boolean>}
 */
const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit('update:model-value', value);
  },
});

/**
 * @description Default placeholder
 * @type {ComputedRef<string>}
 */
const defaultPlaceholder = computed(() => {
  return !!slots.placeholder ? undefined : props.placeholder;
});

/**
 * @description Object of listeners
 * @type {ComputedRef<{change: (event: Event) => void, blur: (event: Event) => void, focus: (event: Event) => void}>}
 */
const listeners = computed(() => {
  return {
    blur: onBlur,
    focus: onFocus,
    change: onChange,
    input: onInput,
  };
});

/**
 * @description Input event handler
 * @param {Event} event
 * @fires InputText#update:model-value
 */
const onInput = (event: Event) => {
  if (!props.counter.visible) return;

  const textareaElement = event.target as HTMLTextAreaElement;
  symbolsTyped.value = textareaElement.value.length;

  if (props.counter.max && symbolsTyped.value > props.counter.max) {
    symbolsTyped.value = props.counter.max;
    emit('update:model-value', textareaElement.value.slice(0, props.counter.max));
  }
};

/**
 * @description Blur event handler
 * @param {Event} event
 */
const onBlur = (event: Event) => {
  focused.value = false;
  emit('blur', event);
};

/**
 * @description Focus event handler
 * @param {Event} event
 */
const onFocus = (event: Event) => {
  focused.value = true;
  emit('focus', event);
};

/**
 * @description Change event handler
 * @param {Event} event
 */
const onChange = (event: Event) => {
  emit('change', event);
};

onMounted(() => {
  if (!props.modelValue) return;
  symbolsTyped.value = props.modelValue.toString().length ?? 0;
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
