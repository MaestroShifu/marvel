import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchNavbarService {

  private dataText: string;

  @Output() text: EventEmitter<string> = new EventEmitter();

  constructor() { }

  changeTextInput(text: string) {
    if(text.length == 0) {
      this.dataText = null;
    } else {
      this.dataText = text;
    }

    this.text.emit(this.dataText);
  }
}
