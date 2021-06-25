import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book';
import { BookImage } from 'src/app/models/book/bookImage';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-popular',
  templateUrl: './book-popular.component.html',
  styleUrls: ['./book-popular.component.css']
})
export class BookPopularComponent implements OnInit {

  books:Book[]


  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.getPopularBooks();
  }
  

  getPopularBooks(){
    this.bookService.getPopularBooks().subscribe(response=>{
      this.books=response.data;
    })
  }

}
