import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Slide2Component } from './components/slide2/slide2.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { Slide1Component } from './components/slide1/slide1.component';


const routes: Routes = [
  {path:'',component:Slide1Component},
  {path:'welcome', component: Slide2Component},
  {path:'dashboard',component: DasboardComponent},
  {path:'create',component:NewBookComponent},
  {path:'books',component:BookTableComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents =[
  Slide1Component,
  Slide2Component,
  DasboardComponent,
  NewBookComponent,
BookTableComponent,
  PageNotFoundComponent
]
