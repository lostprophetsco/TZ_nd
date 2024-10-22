<template>
  <div class="form-group" :class="controlClasses">
    <div :class="`${props.cssClass}__group`">
      <label v-if="props.label" :for="props.id || generatedUid" :class="`${props.cssClass}__label`">
        {{ props.label }}
      </label>

      <input
        v-model="model"
        :type="props.type"
        :id="props.id || generatedUid"
        :placeholder="defaultPlaceholder"
        :autocomplete="props.autocomplete ? 'on' : 'off'"
        :disabled="props.disabled"
        :class="`${props.cssClass}__input`"
        :name="props.name"
        v-on="listeners"
        ref="inputField"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      />

      <button
        v-if="props.type === 'password'"
        type="button"
        :aria-label="passwordVisible ? 'Hide password' : 'Show password'"
        @click="passwordVisibleHandler"
        :class="`${props.cssClass}__toggle`"
      >
        <slot name="passwordIcon" :passwordVisible="passwordVisible">
          <Transition name="fade">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <use :href="`#${passwordVisible ? offPassword : onPassword}`" />
            </svg>
          </Transition>
        </slot>
      </button>
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
import type { IInputTextProps, IInputTextSlots, IInputTextEmits } from './inputDefault';

// Shared
import uid from '@/shared/generators/uid';

// Icons
import onPassword from '@/assets/images/icons/on-password.svg';
import offPassword from '@/assets/images/icons/off-password.svg';

const props = withDefaults(defineProps<IInputTextProps>(), {
  type: 'text',
  autocomplete: false,
  disabled: false,
  cssClass: 'input-text',
  valid: false,
  error: false,
  counter: () => ({ visible: false }),
});

const symbolsTyped = ref(0);
const passwordVisible = ref(false);
const inputField = ref<HTMLInputElement | null>(null);

const emit = defineEmits<IInputTextEmits>();
const slots = defineSlots<IInputTextSlots>();

const focused: Ref<boolean> = ref(false);
const hover: Ref<boolean> = ref(false);
const generatedUid = uid();

const controlClasses = computed(() => {
  return [
    props.cssClass,
    {
      [`${props.cssClass}--${props.theme}`]: props.theme,
      [`${props.cssClass}--focused`]: focused.value,
      [`${props.cssClass}--hover`]: hover.value && !focused.value,
      [`${props.cssClass}--disabled`]: props.disabled,
      [`${props.cssClass}--filled`]: !!props.modelValue,
      [`${props.cssClass}--valid`]: props.valid,
      [`${props.cssClass}--invalid`]: props.error,
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
 * @description Password visibility handler
 */
const passwordVisibleHandler = () => {
  if (props.type !== 'password' || !inputField.value) return;

  if (inputField.value.value.length) {
    passwordVisible.value = !passwordVisible.value;
    inputField.value.setAttribute('type', passwordVisible.value ? 'text' : 'password');
  }
};

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

  const inputElement = event.target as HTMLInputElement;
  symbolsTyped.value = inputElement.value.length;

  if (props.counter.max && symbolsTyped.value > props.counter.max) {
    symbolsTyped.value = props.counter.max;
    emit('update:model-value', inputElement.value.slice(0, props.counter.max));
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
  onInput(event);
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
