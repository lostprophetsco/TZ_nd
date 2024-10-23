import type { ObjectDirective } from 'vue';

/**
 * @description Directive element
 */
export interface IOnClickOutsideElement extends HTMLElement {
  /**
   * @description On click outside function handler
   * @param {MouseEvent | TouchEvent} e
   */
  clickOutsideHandler: (e: MouseEvent | TouchEvent) => void;
}

/**
 * @description Directive binding
 */
export type TOnClickOutsideDirectiveBinding<T = any> = (event: MouseEvent | TouchEvent) => T;

/**
 * On Click Outside Directive
 *
 * @description Директива Vue 3 для определения клика вне элемента.
 */
declare const vOnClickOutside: ObjectDirective<
  IOnClickOutsideElement,
  TOnClickOutsideDirectiveBinding
>;

export default vOnClickOutside;
