import { Injectable, Output, EventEmitter } from '@angular/core';
import { Comic } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private marvel_data: any[];

  @Output() marvel: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.marvel_data = [];
    if(!localStorage.getItem('marvel-maestroshifu')) {
      localStorage.setItem('marvel-maestroshifu', JSON.stringify([]));
    } else {
      this.marvel_data = JSON.parse(localStorage.getItem('marvel-maestroshifu'));
      this.marvel.emit(this.marvel_data);
    }
  }

  changeData(data: any) {
    this.marvel_data.push(data);

    this.emitChange();
  }

  deleteData(comic: Comic) {
    let tempComic = this.marvel_data.filter((comicA: Comic) => {
      if(comicA.id != comic.id) {
        return comicA;
      }
    });

    this.marvel_data = [];
    this.marvel_data = tempComic;

    this.emitChange();
  }

  getData() {
    return this.marvel_data;
  }

  emitChange() {
    localStorage.setItem('marvel-maestroshifu', JSON.stringify(this.marvel_data));

    this.marvel.emit(this.marvel_data);
  }
}
