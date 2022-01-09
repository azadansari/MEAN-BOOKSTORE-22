import { Component, Input, OnInit } from '@angular/core';
import { BookModule } from '../../book.module';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  // Book card takes a book;
  @Input() book: BookModel;

  constructor() { }

  books: BookModule[];

  ngOnInit(): void {

  }

}
