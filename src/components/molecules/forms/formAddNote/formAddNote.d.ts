import { ClassComponent, GlobalComponentConstructor } from '@/ts-helper';
import type { IFormEmits, IFormProps, IFormSlots } from '../form.types.ts';
import type { FormAddNoteModel } from './formAddNote.model.ts';

declare class formAddNote extends ClassComponent<
  IFormProps,
  IFormSlots,
  IFormEmits<FormAddNoteModel>
> {}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    formAddNote: GlobalComponentConstructor<formAddNote>;
  }
}

export default formAddNote;
