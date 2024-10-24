import { ClassComponent, GlobalComponentConstructor } from '@/ts-helper';
import type { IFormEmits, IFormProps, IFormSlots } from '../form.types.ts';
import type { FormRegistrationModel } from './formRegistration.model.ts';

declare class formRegistration extends ClassComponent<
  IFormProps,
  IFormSlots,
  IFormEmits<FormRegistrationModel>
> {}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    formRegistration: GlobalComponentConstructor<formRegistration>;
  }
}

export default formRegistration;
