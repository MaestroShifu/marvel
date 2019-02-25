import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServiceService } from "../../../services/service.service";
import { SearchNavbarService } from "../../../services/search-navbar.service";

import { NgxSpinnerService } from 'ngx-spinner';

import { Page, Comic } from '../../../models/models';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  public comics: Comic[];

  public page: Page;

  public selectSort: any[];

  constructor(private _activatedRoute: ActivatedRoute,private _service: ServiceService, private _searchService: SearchNavbarService, private _ngxSpinner: NgxSpinnerService) {    
    this.comics = [];
    
    this.page = {
      indexPage: 1,
      total: 0,
      itemPerPage: 10,
      dataPage: 0,
      sort: ""  
    };
    
    this.selectSort = [
      {name: "Sort by", value: ""},
      {name: "Foc Date", value: "focDate"},
      {name: "Sale Date", value: "onSaleDate"},
      {name: "Title A-Z", value: "title"},
      {name: "Number max", value: "issueNumber"},
      {name: "Modified", value: "modified"},
      {name: "Title Z-A", value: "title"},
      {name: "Number min", value: "-issueNumber"},
    ];
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
    this._ngxSpinner.show();
    this.comics = [];

    this._activatedRoute.params.subscribe((params: any) => {
      this._service.get_comics_character(params.id, this.page).subscribe((response: any) => {
        this.page.total = response.data.total;
    
        response.data.results.forEach((data: any) => {
          this.comics.push({
            id: data.id,
            img: this._service.get_image(data.thumbnail.path, data.thumbnail.extension),
            title: data.title,
            description: data.description,
            number: data.issueNumber
          });
        });
      }, (error: any) => {
        console.log("Fallo la carga de los characters ", error);
        alert("Fallo en la coneccion");
      }, () => {
        this._ngxSpinner.hide();
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
