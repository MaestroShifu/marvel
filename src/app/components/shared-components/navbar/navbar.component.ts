import { Component, OnInit } from '@angular/core';

import { SearchNavbarService } from "../../../services/search-navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _serviceNavBar: SearchNavbarService) {

  }

  ngOnInit() {
  }

  searchCharacter(text: string) {
    this._serviceNavBar.changeTextInput(text);
  }

}
