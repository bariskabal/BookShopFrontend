import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book/book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[];
  textFilter="";
  textFilterBool=false;


  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      if (params["categoryId"] && params["authorId"]) {
        this.getBooksAuthorAndCategory(params["authorId"],params["categoryId"]);
      }
      else if(params["authorId"]){
        this.getBooksByAuthor(params["authorId"])
      }
      else if(params["textFilter"]){
        this.textFilter= params["textFilter"]
        this.getBooksByFilter(params["textFilter"])
      }
      else if(params["categoryId"]){
        this.getBooksByCategory(params["categoryId"])
        
      }
      else{
        this.getBooks();
      }
    })
  }

  getBooks(){
    this.bookService.getAll().subscribe(response=>{
      this.books=response.data;
      this.textFilterBool=false;
    })
  }
  getBooksByCategory(categoryId:number){
    this.bookService.getByCategoryId(categoryId).subscribe(response=>{
      this.books=response.data;
      console.log(this.books)
    })
  }
  getBooksByFilter(textFilter:string){
    this.bookService.getByFilter(textFilter).subscribe(response=>{
      this.books=response.data;
      this.textFilterBool=true;
    })
  }
  getBooksByAuthor(authorId:number){
    this.bookService.getByAuthorId(authorId).subscribe(response=>{
      this.books=response.data;
      this.textFilterBool=false;
    })
  }
  getBooksAuthorAndCategory(authorId:number,categoryId:number){
    this.bookService.getBooksByAuthorAndCategoryId(authorId,categoryId).subscribe(response=>{
      this.books=response.data;
    })
  }
}
