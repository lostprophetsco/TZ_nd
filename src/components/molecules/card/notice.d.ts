import type { ClassComponent, GlobalComponentConstructor } from '../../../../ts-helper';

/**
 * @description Notice component props
 */
export interface INoticeProps {
  /**
   * @description Title of the notice
   */
  title?: string;

  /**
   * @description Class of the notice
   */
  cssClass?: string;

  /**
   * @description Text for delete button
   */
  deleteText?: string;
}

export interface INoticeSlots {
  /**
   * @description Default component slot.
   * @returns {VNode[]}
   */
  default(): VNode[];

  /**
   * @description Custom delete button slot
   * @returns {VNode[]}
   */
  deleteButton(): VNode[];
}

/**
 * @description Notice component emits
 */
export interface INoticeEmits {
  (e: 'delete', id: number): void;
}

/**
 * Card Notice
 * Компонент карточки заметки
 */
declare class Notice extends ClassComponent<INoticeProps, INoticeEmits> {}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    Notice: GlobalComponentConstructor<Notice>;
  }
}

export default Notice;
