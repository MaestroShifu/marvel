import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "../../../services/local-storage.service";
import { Comic } from '../../../models/models';

@Component({
  selector: 'app-comics-favorite',
  templateUrl: './comics-favorite.component.html',
  styleUrls: ['./comics-favorite.component.css']
})
export class ComicsFavoriteComponent implements OnInit {

  public comics: Comic[];

  constructor(private _localStorage: LocalStorageService) { 
    this.comics = [];

    this.comics = this._localStorage.getData();
  }

  ngOnInit() {
    this._localStorage.marvel.subscribe((comics) => {
      this.comics = comics;
    });
  }

  deleteComic(comic: Comic) {
    this._localStorage.deleteData(comic);
  }

}
