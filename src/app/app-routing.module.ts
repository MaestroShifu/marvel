import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { HomeComponent } from "./components/root-pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
