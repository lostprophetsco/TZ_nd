<template>
  <component
    :is="props.tag"
    :type="props.tag === 'button' ? 'button' : undefined"
    :class="modifierClasses"
    :disabled="props.tag === 'button' ? props.disabled : undefined"
  >
    <span :class="iconPosModifier">
      <span v-if="!!slots.icon" :class="`${props.cssClass}__icon`" aria-hidden="true">
        <slot name="icon" />
      </span>

      <span :class="`${props.cssClass}__text`">
        <slot />
      </span>
    </span>

    <span v-if="props.loading" :class="`${props.cssClass}__loading`">
      <slot name="loading"> Loading... </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue';

// Types
import type { IButtonProps, IButtonSlots } from './button';

const props = withDefaults(defineProps<IButtonProps>(), {
  tag: 'button',
  cssClass: 'button',
});
const slots = defineSlots<IButtonSlots>();

/**
 * @description Computed property return root CSS modifier classes
 * @type {ComputedRef<string>}
 * @default button
 */
const modifierClasses = computed(() => {
  return [
    props.cssClass,
    {
      [`${props.cssClass}--${props.modifier}`]: props.modifier,
      [`${props.cssClass}--${props.theme}`]: props.theme,
      [`${props.cssClass}--${props.size}`]: props.size,
      [`${props.cssClass}--loading`]: props.loading,
      [`${props.cssClass}--disabled`]: props.disabled,
      [`${props.cssClass}--selected`]: props.selected,
    },
  ];
});

/**
 * @description Computed property return icon position modifier classes
 * @type {ComputedRef<string>}
 * @default button-group
 */
const iconPosModifier = computed(() => {
  const buttonGroup = `${props.cssClass}__group`;

  return [
    buttonGroup,
    {
      [`${buttonGroup}--icon-${props.iconPos}`]: props.iconPos,
    },
  ];
});
</script>
