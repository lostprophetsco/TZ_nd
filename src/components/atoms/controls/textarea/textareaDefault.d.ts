import type { ClassComponent, GlobalComponentConstructor } from '../../../../../ts-helper';
import type { VNode } from 'vue';

interface ICounter {
  visible?: boolean;
  max?: number;
}

/**
 * @description Component props
 */
export interface ITextareaProps {
  /**
   * @description Textarea modelValue
   *
   * @type string | number | null
   * @default ''
   */
  modelValue: string | number | null;

  /**
   * @description Input counter.
   *
   * @type ICounter
   * @default undefined
   */
  counter?: ICounter;

  /**
   * @description Textarea id
   *
   * @type string
   * @default random generated string
   */
  id?: string;

  /**
   * @description Textarea name
   *
   * @type string
   * @default undefined
   */
  name?: string;

  /**
   * @description Textarea custom theme. Adds a class to the root element of the component.
   *
   * @type string
   * @default undefined
   */
  theme?: string;

  /**
   * @description Textarea custom modifier. Adds a class to the root element of the component.
   *
   * @type string
   * @default undefined
   */
  modifier?: string;

  /**
   * @description Textarea root CSS class.
   *
   * @type string
   * @default 'textarea-default'
   */
  cssClass?: string;

  /**
   * @description Textarea native disabled attribute.
   *
   * @type boolean
   * @default false
   */
  disabled?: boolean;

  /**
   * @description Textarea label text
   *
   * @type string
   * @default undefined
   */
  label?: string;

  /**
   * @description Textarea placeholder. Will be ignored if placeholder slot is defined.
   *
   * @type string
   * @default undefined
   */
  placeholder?: string;

  /**
   * @description Textarea valid state.
   *
   * @type boolean
   * @default false
   */
  valid?: boolean;

  /**
   * @description Textarea error state.
   *
   * @type boolean | string
   * @default false
   */
  error?: boolean | string;

  /**
   * @description Textarea show number of rows
   *
   * @type number
   * @default undefined
   */
  rows?: number;
}

/**
 * @description Component slots
 */
export interface ITextareaSlots {
  /**
   * @description Custom placeholder. If defined, then `props.placeholder` will be ignored.
   * @returns {VNode[]}
   */
  placeholder(): VNode[];

  /**
   * @description Textarea error messages.
   * @returns {VNode[]}
   */
  error(): VNode[];
}

/**
 * @description Component emits
 */
export interface ITextareaEmits {
  (e: 'update:model-value', payload: ITextareaProps['modelValue']): void;
  (e: 'blur', event: Event): void;
  (e: 'focus', event: Event): void;
  (e: 'change', event: Event): void;
}

/**
 * Textarea
 *
 * _Поле textarea, элемент формы для создания области, в которую можно вводить несколько строк текста._
 */
declare class Textarea extends ClassComponent<ITextareaProps, ITextareaSlots, ITextareaEmits> {}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    Textarea: GlobalComponentConstructor<Textarea>;
  }
}

export default Textarea;
