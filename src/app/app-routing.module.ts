import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { HomeComponent } from "./components/root-pages/home/home.component";
import { ComicsListComponent } from "./components/root-pages/comics-list/comics-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters/:id', component: ComicsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
