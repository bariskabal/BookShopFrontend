import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category';
import { BookService } from 'src/app/services/book/book.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[]
  booksNumber:number;
  categoryId:number;


  constructor(private categoryService:CategoryService,private bookService:BookService) { }

  ngOnInit() {
    this.getCategories()
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data;
    })
  }
  getBooksByCategoryId(categoryId:number){
    this.bookService.getByCategoryId(categoryId).subscribe(response=>{
      this.booksNumber=response.data.length
    })
  }

}
