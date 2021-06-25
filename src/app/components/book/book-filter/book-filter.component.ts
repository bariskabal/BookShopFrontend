import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author/author';
import { Category } from 'src/app/models/category/category';
import { AuthorService } from 'src/app/services/author/author.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit {

  authors:Author[];
  categories:Category[];
  authorIdFilter:number;
  categoryIdFilter:number;


  constructor(private categoryService:CategoryService,private authorService:AuthorService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getCategories();
    this.getAuthors();
    this.getActivesFromParams();
  }
  getActivesFromParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['categoryId']) this.categoryIdFilter = params['categoryId'];
      if (params['authorId']) this.authorIdFilter = params['authorId'];
    });
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
    })
  }
  getAuthors(){
    this.authorService.getAuthors().subscribe(response=>{
      this.authors=response.data;
    })
  }
  getSelectedCategory(categoryId:number){
    if (this.categoryIdFilter==categoryId) {
      return true;
    }
    else{
      return false;
    }
  }
  getSelectedAuthor(authorId:number){
    if (this.authorIdFilter==authorId) {
      return true;
    }
    else{
      return false;
    }
  }
}
