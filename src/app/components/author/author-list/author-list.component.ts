import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author/author';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors:Author[]


  constructor(private authorService:AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    this.authorService.getAuthors().subscribe(response=>{
      this.authors=response.data;
    })
  }
  

}
