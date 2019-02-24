import { Component, OnInit } from '@angular/core';

import { ServiceService } from "../../../services/service.service";
import { SearchNavbarService } from "../../../services/search-navbar.service";

import { Hero, Page } from "../../../models/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public heroes: Hero[];

  public page: Page;

  public selectSort: any[];

  constructor(private _service: ServiceService, private _searchService: SearchNavbarService) {
    //inicializar  
    this.heroes = [];

    this.selectSort = [
      {name: "Sort by", value: ""},
      {name: "Name A-Z", value: "name"},
      {name: "Name Z-A", value: "-name"},
      {name: "Modified Present-Past", value: "modified"},
      {name: "Modified Past-Present", value: "-modified"}
    ];

    this.page = {
      indexPage: 1,
      total: 0,
      itemPerPage: 10,
      dataPage: 0,
      sort: ""  
    };
  }

  ngOnInit() {
    this._searchService.text.subscribe((text: string) => {
      if(text) {
        this.page.search = text;

        this.loadViewService();
      }
    });

    this.loadViewService();
  }
  
  loadViewService() {
    this.heroes = [];

    this._service.get_all_characters(this.page).subscribe((response: any) => {
      this.page.total = response.data.total;
  
      response.data.results.forEach((data: any) => {
        this.heroes.push({
          id: data.id,
          img: this._service.get_image(data.thumbnail.path, data.thumbnail.extension),
          name: data.name,
          description: data.description,
          comics: data.comics.items
        });
      });
    });
  }

  pageChanged(event: any) {
    this.page.indexPage = event;
    this.page.dataPage = (+event - 1) * this.page.itemPerPage;

    this.loadViewService();
  }

  sortCharacters(event: any) {
    this.page.sort = event;

    this.loadViewService();
  }

}
