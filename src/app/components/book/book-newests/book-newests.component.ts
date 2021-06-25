import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-newests',
  templateUrl: './book-newests.component.html',
  styleUrls: ['./book-newests.component.css']
})
export class BookNewestsComponent implements OnInit {

  books:Book[]

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.getNewestsBooks()
  }

  getNewestsBooks(){
    this.bookService.getNewestsBooks().subscribe(response=>{
      this.books=response.data;
    })
  }


}
