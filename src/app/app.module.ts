import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

//import service
import { ServiceService } from "./services/service.service";
import { SearchNavbarService } from "./services/search-navbar.service";

//Import Pipes
import { TextSmallPipe } from './pipes/text-small.pipe';

//Import ngx pagination
import { NgxPaginationModule } from 'ngx-pagination';

//Import ngx spinner
import { NgxSpinnerModule } from 'ngx-spinner';

//Import Ngx modal
import { NgxSmartModalModule } from 'ngx-smart-modal';

// Import components project angular
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { HomeComponent } from './components/root-pages/home/home.component';
import { ComicsListComponent } from './components/root-pages/comics-list/comics-list.component';
import { ComicsFavoriteComponent } from './components/shared-components/comics-favorite/comics-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TextSmallPipe,
    ComicsListComponent,
    ComicsFavoriteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [
    ServiceService,
    SearchNavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
