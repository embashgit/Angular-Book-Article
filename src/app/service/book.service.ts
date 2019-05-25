import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient} from "@angular/common/http"
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  formData:Book;
  list:Book[];
  readonly rootURL = 'http://localhost:64656/api';
  constructor(private http:HttpClient) { }

  postBook(formData: Book){
    return  this.http.post(this.rootURL+'/book',formData);
  }

  refreshBook(): Observable<Book[]>{
    return  this.http.get<Book[]>(this.rootURL+'/book');
  }
  // refreshList(){
  //   this.http.get(this.rootURL+'book')
  //   .toPromise().then(res=>{
  //     this.list = res as Book[]
  //   });
  // }

  deleteBook(id:number){
  return  this.http.delete(this.rootURL+'/book/'+id)
  }
}
