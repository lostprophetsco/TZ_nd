<template>
  <div class="card-notice">
    <div v-if="props.title" class="card-notice__header">
      {{ props.title }}
    </div>

    <div class="card-notice__body">
      <slot />
    </div>

    <div class="card-notice__footer">
      <slot name="deleteButton">
        <button type="button" class="card-notice__delete">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <use :href="`#${iconClose}`" />
          </svg>

          Удалить
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Types
import type { INoticeProps, INoticeSlots, INoticeEmits } from './notice';

// Icons
import iconClose from '@/assets/images/icons/close.svg';

const props = defineProps<INoticeProps>();
const slots = defineSlots<INoticeSlots>();
const emit = defineEmits<INoticeEmits>();

const deleteCard = () => {
  // console.log('Delete card');
  // emit('delete', card.id);
};
</script>
