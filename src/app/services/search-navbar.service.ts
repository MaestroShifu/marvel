import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchNavbarService {

  private dataText: string;

  @Output() text: EventEmitter<string> = new EventEmitter();

  constructor() { }

  changeTextInput(text: string) {
    this.dataText = text;

    this.text.emit(this.dataText);
  }
}
