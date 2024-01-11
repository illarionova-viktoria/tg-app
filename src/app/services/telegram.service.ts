import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from "@angular/common";

interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
  onClick(fn: Function): void;
  offClick(fn: Function): void;
  enable(): void;
  disable(): void;
}

interface TgBackButton {
    show(): void;
    hide(): void;
    onClick(fn: Function): void;
    offClick(fn: Function): void;
    isVisible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  window;
  tg;
  
  constructor(@Inject(DOCUMENT) private _document: any) {
    this.window = this._document.defaultView;
    this.tg = this.window?.Telegram?.WebApp;
  }

  get MainButton(): TgButton {
    return this.tg?.MainButton
  }

  get BackButton(): TgBackButton {
    return this.tg?.BackButton;
  }

  sendData(data: object): void{
    this.tg?.sendData(JSON.stringify(data));
  }

  ready(): void {
    this.tg?.ready();
  }

}
