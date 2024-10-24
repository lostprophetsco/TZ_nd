export interface IFormRegistrationModel {
  password: string | number | Date | null;
  confirmPassword: string | number | Date | null;
  email: string | number | Date | null;
}

/**
 * @description Registration form model
 */
export class FormRegistrationModel {
  private _password: IFormRegistrationModel['password'];
  private _confirmPassword: IFormRegistrationModel['confirmPassword'];
  private _email: IFormRegistrationModel['email'];

  constructor(attrs: Partial<IFormRegistrationModel> | null = {}) {
    attrs = attrs ?? {};

    this._password = attrs.password || null;
    this._confirmPassword = attrs.confirmPassword || null;
    this._email = attrs.email || null;
  }

  public get password() {
    return this._password;
  }

  public set password(password: IFormRegistrationModel['password']) {
    this._password = password;
  }

  public get email() {
    return this._email;
  }

  public set email(email: IFormRegistrationModel['email']) {
    this._email = email;
  }

  public get confirmPassword() {
    return this._confirmPassword;
  }

  public set confirmPassword(confirmPassword: IFormRegistrationModel['confirmPassword']) {
    this._confirmPassword = confirmPassword;
  }

  public reset() {
    this._password = null;
    this._confirmPassword = null;
    this._email = null;
  }
}
