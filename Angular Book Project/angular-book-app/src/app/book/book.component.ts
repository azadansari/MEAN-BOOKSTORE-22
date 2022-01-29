import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Array<Book>=[];

  bookRef = new FormGroup({
    name: new FormControl(),
    author: new FormControl(),
    imgSrc: new FormControl(),
    price: new FormControl(),

  });

  constructor(public bookService:BookService) { }

  ngOnInit(): void {
    this.getAllBooksDetails();
  }


  getAllBooksDetails() : void {
    this.bookService.loadBookDetails().
    subscribe(result=>this.books=result,error=>console.log(error),()=>console.log("done"));
  }

  storeBookInfo(){

    let book = this.bookRef.value;

    //console.log(book);
    this.bookService.storeBookDetails(book).
    subscribe(res=>console.log(res),error=>console.log(error),()=>console.log("finish"));
  }

}
