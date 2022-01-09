import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/book/book.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  books!: BookModule[];

  ngOnInit(): void {
  }

}
