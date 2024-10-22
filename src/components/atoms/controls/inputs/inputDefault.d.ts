import type { ClassComponent, GlobalComponentConstructor } from '../../../../../ts-helper';
import type { VNode } from 'vue';

interface ICounter {
  visible?: boolean;
  max?: number;
}

/**
 * @description Component props
 */
export interface IInputTextProps {
  /**
   * @description Input modelValue.
   *
   * @type string | number | Date | null
   * @default ''
   */
  modelValue: string | number | Date | null;

  /**
   * @description Input counter.
   *
   * @type ICounter
   * @default undefined
   */
  counter?: ICounter;

  /**
   * @description Input native type attribute.
   *
   * @type 'text' |'email' | 'password'
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password';

  /**
   * @description Input native id attribute.
   *
   * @type string
   * @default Random generated string
   */
  id?: string;

  /**
   * @description Input native name attribute.
   *
   * @type string
   * @default undefined
   */
  name?: string;

  /**
   * @description Input label text.
   *
   * @type string
   * @default undefined
   */
  label?: string;

  /**
   * @description Input placeholder. Will be ignored if placeholder slot is defined.
   *
   * @type string
   * @default undefined
   */
  placeholder?: string;

  /**
   * @description Input custom theme. Adds a class to the root element of the component .input-text-$theme.
   *
   * @type string
   * @default undefined
   */
  theme?: string;

  /**
   * @description Input root CSS class.
   *
   * @type string
   * @default 'input-default'
   */
  cssClass?: string;

  /**
   * @description Input native autocomplete attribute.
   *
   * @type boolean
   * @default false
   */
  autocomplete?: boolean;

  /**
   * @description Input native disabled attribute.
   *
   * @type boolean
   * @default false
   */
  disabled?: boolean;

  /**
   * @description Input valid state.
   *
   * @type boolean
   * @default false
   */
  valid?: boolean;

  /**
   * @description Input error state.
   *
   * @type boolean | string
   * @default false
   */
  error?: boolean | string;
}

/**
 * @description Component slots
 */
export interface IInputTextSlots {
  /**
   * @description Default component slot
   * @returns {VNode[]}
   */
  default(): VNode[];

  /**
   * @description Custom placeholder. If defined, then `props.placeholder` will be ignored.
   * @returns {VNode[]}
   */
  placeholder(): VNode[];

  /**
   * @description Input error messages.
   * @returns {VNode[]}
   */
  error(): VNode[];

  passwordIcon?(scope: { passwordVisible: boolean }): VNode[];
}

/**
 * @description Component emits
 */
export interface IInputTextEmits {
  (e: 'update:model-value', payload: IInputTextProps['modelValue']): void;
  (e: 'blur', event: Event): void;
  (e: 'focus', event: Event): void;
  (e: 'change', event: Event): void;
}

/**
 * **Input Text**
 *
 * _Текстовый инпут. Подходит для текстовый и email полей ввода._
 */
declare class InputText extends ClassComponent<IInputTextProps, IInputTextSlots, IInputTextEmits> {}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    InputText: GlobalComponentConstructor<InputText>;
  }
}

export default InputText;
