import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/book/book.module';
import { BookModel } from 'src/app/book/models/book.model';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Steps:
  // To call api from angular.
  // 1. call api from home component (Bad Practice)
      // because it violates single resposni..
      // component is responsible only ro handle html
  // 2. to create a service which will call api.
      //


  // Constructor injection of dependencies.
  constructor(private bookService: BookService) { }
  books: BookModel[];

  // Lifecycle hook, component is initialized
  ngOnInit(): void {
    this.books = [];

    // const instanceOfBookService = new BookService();
    const bookObservable = this.bookService.getBooks();
    bookObservable.subscribe(
        (result)=>{this.books=result;},
        (err)=>{console.log(err)},
        ()=>{console.log("done")}
    )


    // let book = new BookModel();
    // book.id = 1;
    // book.name = "Sidhhartha";
    // book.price = 200;
    // book.author = "Herman H";
    // book.imgSrc = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Siddhartha_%281922%29_by_Hermann_Hesse.jpg";
    // this.books.push(book);
  }
}
