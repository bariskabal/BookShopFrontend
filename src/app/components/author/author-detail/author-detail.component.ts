import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetail } from 'src/app/models/author/authorDetail';
import { Book } from 'src/app/models/book/book';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  author:AuthorDetail
  authorId:number
  books:Book[];


  constructor(private authorService:AuthorService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getByAuthorId(params["Id"]);
    })
  }
  getByAuthorId(Id:number){
    this.authorId=Id
    this.authorService.getById(Id).subscribe(response=>{
      this.author=response.data[0];
      this.books=response.data[0].books;
    })
  }

}
