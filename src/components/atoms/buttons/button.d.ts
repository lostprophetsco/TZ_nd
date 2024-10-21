import type { ClassComponent, GlobalComponentConstructor } from '../../../../ts-helper';
import type { VNode } from 'vue';

export interface IButtonProps {
  /**
   * @description Button tag
   *
   * @type string
   * @default 'button'
   * @required
   */

  tag?: 'button' | 'a' | 'span';

  /**
   * @description Button position of icon
   * @type string
   */
  iconPos?: 'left' | 'right' | 'top' | 'bottom';

  /**
   * @description Set button custom CSS class
   * @type string
   */
  cssClass?: string;

  /**
   * @description Button modifier for different styles
   * @type string
   */
  modifier?: 'primary' | 'secondary' | 'quaternary' | 'tertiary' | string;

  /**
   * @description Button theme (light, dark, etc.)
   * @type string
   */
  theme?: 'dark' | string;

  /**
   * @description Button size modifier (small, medium, large, etc)
   * @type string
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * @description Button loading state
   *
   * @type boolean
   * @default false
   */
  loading?: boolean;

  /**
   * @description Button disabled state
   *
   * @type boolean
   * @default false
   */
  disabled?: boolean;

  /**
   * @description Button selected state
   *
   * @type boolean
   * @default false
   */
  selected?: boolean;
}

/**
 * @description Component slots
 */
export interface IButtonSlots {
  /**
   * @description Default component slot
   * @returns {VNode[]}
   */
  default(): VNode[];

  /**
   * @description Custom button icon
   * @returns {VNode[]}
   */
  icon(): VNode[];

  /**
   * @description Custom button label
   * @returns {VNode[]}
   */
  loading(): VNode[];
}

/**
 * @description Component emits
 */
export interface IButtonEmits {}

/**
 * Button
 * Компонент кнопки
 */
declare class Button extends ClassComponent<IButtonProps, IButtonSlots, IButtonEmits> {}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    Button: GlobalComponentConstructor<Button>;
  }
}

export default Button;
