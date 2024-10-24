export interface IFormAddNoteModel {
  title: string | number | Date | null;
  text: string | number | null;
}

/**
 * @description Add note form model
 */
export class FormAddNoteModel {
  private _title: IFormAddNoteModel['title'];
  private _text: IFormAddNoteModel['text'];

  constructor(attrs: Partial<IFormAddNoteModel> | null = {}) {
    attrs = attrs ?? {};

    this._title = attrs.title || null;
    this._text = attrs.text || null;
  }

  public get title() {
    return this._title;
  }

  public set title(title: IFormAddNoteModel['title']) {
    this._title = title;
  }

  public get text() {
    return this._text;
  }

  public set text(text: IFormAddNoteModel['text']) {
    this._text = text;
  }

  public reset() {
    this._title = null;
    this._text = null;
  }
}
