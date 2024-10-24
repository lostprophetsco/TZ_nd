export interface IFormLoginModel {
  password: string | number | Date | null;
  email: string | number | Date | null;
}

/**
 * @description Login form model
 */
export class FormLoginModel {
  private _password: IFormLoginModel['password'];
  private _email: IFormLoginModel['email'];

  constructor(attrs: Partial<IFormLoginModel> | null = {}) {
    attrs = attrs ?? {};

    this._password = attrs.password || null;
    this._email = attrs.email || null;
  }

  public get password() {
    return this._password;
  }

  public set password(password: IFormLoginModel['password']) {
    this._password = password;
  }

  public get email() {
    return this._email;
  }

  public set email(email: IFormLoginModel['email']) {
    this._email = email;
  }

  public reset() {
    this._password = null;
    this._email = null;
  }
}
