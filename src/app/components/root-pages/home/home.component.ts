import { Component, OnInit } from '@angular/core';

import { ServiceService } from "../../../services/service.service";

import { Hero } from "../../../models/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public heroes: Hero[];

  datatest: string = "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the ";

  constructor(private _service: ServiceService) {
    //inicializar  
    this.heroes = [];
""
    console.log("data de leng:", this.datatest.length);
  }

  ngOnInit() {
    this._service.get_all_characters().subscribe((response: any) => {

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

}
