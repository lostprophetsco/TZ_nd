import { ClassComponent, GlobalComponentConstructor } from '@/ts-helper';
import type { IFormEmits, IFormProps, IFormSlots } from '../form.types.ts';
import type { FormLoginModel } from './formLogin.model.ts';

declare class formLogin extends ClassComponent<
  IFormProps,
  IFormSlots,
  IFormEmits<FormLoginModel>
> {}

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    formLogin: GlobalComponentConstructor<formLogin>;
  }
}

export default formLogin;
