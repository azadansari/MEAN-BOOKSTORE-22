import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/book/book.module';
import { BookModel } from 'src/app/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  books: BookModel[];

  // Lifecycle hook, component is initialized
  ngOnInit(): void {
    this.books = [];
    let book = new BookModel();
    book.id = 1;
    book.name = "Sidhhartha";
    book.price = 200;
    book.author = "Herman H";
    book.imgSrc = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Siddhartha_%281922%29_by_Hermann_Hesse.jpg";
    this.books.push(book);

    let book2 = new BookModel();
    book2.id = 2;
    book2.name = ".Net 2.0";
    book2.author = "Xyz Pub.";
    book2.imgSrc = "https://images-na.ssl-images-amazon.com/images/I/51JdckX4AdL.jpg";
    this.books.push(book2);
  }
}
