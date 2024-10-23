import type { ClassComponent, GlobalComponentConstructor } from '../../../../ts-helper';
import type { VNode } from 'vue';

/**
 * @description Modal component props
 */
export interface IModalProps {
  isOpen: boolean;
  /**
   * @description Modal cssClass
   */
  cssClass?: string;
}

/**
 * @description Modal component slots
 */
export interface IModalSlots {
  /**
   * @description Default component slot
   * @returns {VNode[]}
   */
  default(): VNode[];

  /**
   * @description Custom close button slot
   * @returns {VNode[]}
   */
  closeButton?(scope: { closeModal(): void }): VNode[];
}

/**
 * @description Modal component emits
 */
export interface IModalEmits {
  /**
   * @description Modal close event
   */
  (e: 'modal-close'): void;
}

/**
 * **Modal**
 *
 * Модальное окно
 */
declare class Modal extends ClassComponent<IModalProps, IModalSlots, IModalEmits> {}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    Modal: GlobalComponentConstructor<Modal>;
  }
}

export default Modal;
