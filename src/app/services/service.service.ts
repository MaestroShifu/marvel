import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Page } from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private host: string;
  private key: string;

  // https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=0&apikey=bb176649dd28fc5a09bf67e88a6b326f

  constructor(private http: HttpClient) {
    this.host = 'http://gateway.marvel.com/v1/public';
    this.key = 'ts=1&apikey=bb176649dd28fc5a09bf67e88a6b326f&hash=d69b04813f18aecc036b69c34d0c6fef'
  }

  get_image(url: string, format: string) {
    return `${url}/standard_xlarge.${format}`;
  }

  get_image_comic(url: string, format: string) {
    return `${url}/portrait_incredible.${format}`;
  }

  get_all_characters(page?: Page) {
    if(page.search && (page.search.length > 0)) {
      return this.http.get(`${this.host}/characters?nameStartsWith=${page.search}&orderBy=${page.sort}&limit=${page.itemPerPage}&offset=${page.dataPage}&${this.key}`);
    }

    return this.http.get(`${this.host}/characters?&orderBy=${page.sort}&limit=${page.itemPerPage}&offset=${page.dataPage}&${this.key}`);
  }

  get_comics_character(id: number, page?: Page) {
    return this.http.get(`${this.host}/characters/${id}/comics?&orderBy=${page.sort}&limit=${page.itemPerPage}&offset=${page.dataPage}&${this.key}`);
  }
}