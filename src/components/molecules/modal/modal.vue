<template>
  <div :class="controlClasses">
    <div :class="`${props.cssClass}__overlay`"></div>

    <div :class="`${props.cssClass}__body`" v-on-click-outside="closeModal">
      <div :class="`${props.cssClass}__close`">
        <slot name="closeButton" :closeModal="closeModal">
          <Button modifier="rounded" class="modal__close" @click.stop="closeModal">
            <template #icon>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <use :href="`#${iconClose}`" />
              </svg>
            </template>
          </Button>
        </slot>
      </div>

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue';

// Icons
import iconClose from '@/assets/images/icons/close.svg';

// Types
import type { IModalProps, IModalEmits } from './modal';

// Components
import Button from '@/components/atoms/buttons/button.vue';

// Directives
import vOnClickOutside from '@/directives/onClickOutside/OnClickOutside.ts';

const props = withDefaults(defineProps<IModalProps>(), {
  isOpen: false,
  cssClass: 'modal',
});

const emit = defineEmits<IModalEmits>();
//const slots = defineSlots<IModalSlots>();

const controlClasses = computed(() => {
  return [
    props.cssClass,
    {
      [`${props.cssClass}--opened`]: props.isOpen,
    },
  ];
});

const closeModal = () => {
  emit('modal-close');
};
</script>
