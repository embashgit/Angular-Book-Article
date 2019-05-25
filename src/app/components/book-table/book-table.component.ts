import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import {DataSource} from '@angular/cdk/collections'
import {Book} from '../../service/book.model'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

 dataSource = new BookDataSource(this.sevice);
  displayedColumns = [ 'title','category','author','description','action'];

  constructor(private sevice :BookService,
    private toastr:ToastrService) { }

  ngOnInit() {
  this.sevice.refreshBook();
  }

  onDelete(id:number){

    if(confirm("Are you sure you want to Delete this Book")){
      //  this.service.deleteBook(id).subscribe(res => this.service.refreshBook());
       this.sevice.deleteBook(id).subscribe(res=>{
         this.toastr.info("Deleted Successfully","BooKaive");
         return this.sevice.refreshBook();
        });
    }
  }
  populateForm(bk:Book){

    this.sevice.formData = bk;
    console.log(bk)
  }

}

export class BookDataSource  extends DataSource<any>{
  constructor(private sevice :BookService) {
    super();
   }

   connect(): Observable<Book[]>{
     return this.sevice.refreshBook();

   }

   disconnect(){}
}


