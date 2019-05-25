import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/service/book.model';
import { BookService } from 'src/app/service/book.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  constructor(private service:BookService,
    private toastr:ToastrService) { }
  resetForm(form ? :NgForm){
    if(form != null)
    form.resetForm(  );
    this.service.formData ={
      BookID:null,
      title:'',
      author:'',
      category:'',
      description:'',
    }
  }
  categories = [
    {id:1,name:'Poetry'},
    {id:2,name:'Fiction'},
    {id:3,name:'Journal'},
    {id:4,name:'Article'}
  ];
  ngOnInit() {
    this.resetForm();
  }
onSubmit(form:NgForm){
this.insertRecord(form);
}

insertRecord(form:NgForm){
this.service.postBook(form.value).subscribe(res =>{
  this.toastr.success("New book Added Successfully","BooKaive");
  this.resetForm(form);
});
}
}
