import type { VNode } from 'vue';

export enum EFormStates {
  DEFAULT = 'default',
}

export enum EFormStateMessages {
  DEFAULT_TITLE_LOGIN = 'Вход в ваш аккаунт',
  DEFAULT_TITLE_REGISTRATION = 'Регистрация',
  DEFAULT_TITLE_NOTE_ADD = 'Добавление заметки',
}

/**
 * @description Form props
 */
export interface IFormProps {
  /**
   * @description Default title text
   * @type string
   */
  defaultTitle?: string;

  /**
   * @description Form error state
   * @type boolean
   */
  error?: boolean;

  /**
   * @description Form success state
   * @type boolean
   */
  success?: boolean;
}

/**
 * @description Form slots
 */
export interface IFormSlots {
  /**
   * @description default component slot
   */
  default(): VNode[];

  /**
   * @description error component slot
   */
  error(): VNode[];

  /**
   * @description success component slot
   */
  success(): VNode[];

  /**
   * @description footer text component slot
   */
  footerText(): VNode[];

  /**
   * @description button text component slot
   */
  buttonText(): VNode[];
}

/**
 * @description Form emits
 */
export interface IFormEmits<T> {
  (e: 'submit', formData: T): void;
}
