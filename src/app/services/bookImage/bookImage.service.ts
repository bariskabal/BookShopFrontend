import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookImage } from 'src/app/models/book/bookImage';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BookImageService {
  
  apiUrl = "https://localhost:44323/api/bookImages/";


  constructor(private httpClient:HttpClient) { }
  
  getBookImages():Observable<ListResponseModel<BookImage>>{
    return this.httpClient.get<ListResponseModel<BookImage>>(this.apiUrl+"getall")
  }
  getBookImageByBookId(bookId:number):Observable<ItemResponseModel<BookImage>>{

    return this.httpClient.get<ItemResponseModel<BookImage>>(this.apiUrl+"getbyid?id="+bookId)
  }

}
