import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book/book';
import { BookDetail } from 'src/app/models/book/bookDetail';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = "https://localhost:44323/api/books/";


constructor(private httpClient:HttpClient) { }

getAll():Observable<ListResponseModel<Book>>{
  return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl+"getall")
}
getPopularBooks():Observable<ListResponseModel<Book>>{
  return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl+"getpopularbooks");
}
getNewestsBooks():Observable<ListResponseModel<Book>>{
  return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl+"getnewestsbooks");
}
getByCategoryId(categoryId:number):Observable<ListResponseModel<Book>>{
  return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl+"getbycategoryid?categoryId="+categoryId);
}
getByAuthorId(authorId:number):Observable<ListResponseModel<Book>>{
  return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl+"getbyauthorid?authorId="+authorId);
}
getByFilter(textFilter:string):Observable<ListResponseModel<Book>>{
  return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl+"getbyfilter?textFilter="+textFilter);
}
getBooksByAuthorAndCategoryId(authorId:number,categoryId:number):Observable<ListResponseModel<Book>>{
  return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl+"getbyauthorandcategoryid?categoryId=" + categoryId + "&authorId="+ authorId)
}
getById(Id:number):Observable<ListResponseModel<BookDetail>>{
  return this.httpClient.get<ListResponseModel<BookDetail>>(this.apiUrl+"getbyid?id="+Id);
}
}
