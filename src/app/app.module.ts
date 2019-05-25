
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { Slide1Component } from './components/slide1/slide1.component';
import { Slide2Component } from './components/slide2/slide2.component';
import { Slide3Component } from './components/slide3/slide3.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material';
import { ToastrModule } from 'ngx-toastr';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { SideBarDrawerComponent } from './components/side-bar-drawer/side-bar-drawer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { BookComponent } from './components/book/book.component';
import { NavbarComponent } from './navbar/navbar.component'
import { BookService } from './service/book.service';
import { HttpClientModule} from "@angular/common/http";
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material'
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PageNotFoundComponent,
    NewBookComponent,
    BookTableComponent,
    BookComponent,
    NavbarComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
  // angular.module('app', ['ui.swiper'])
})
export class AppModule {
}
