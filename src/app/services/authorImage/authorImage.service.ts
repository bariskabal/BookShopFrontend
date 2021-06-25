import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorImage } from 'src/app/models/author/authorImage';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorImageService {

  apiUrl = "https://localhost:44323/api/authorImages/";


  constructor(private httpClient:HttpClient) { }
  
  getBookImages():Observable<ListResponseModel<AuthorImage>>{
    return this.httpClient.get<ListResponseModel<AuthorImage>>(this.apiUrl+"getall")
  }
  getBookImageByBookId(authorId:number):Observable<ItemResponseModel<AuthorImage>>{
    return this.httpClient.get<ItemResponseModel<AuthorImage>>(this.apiUrl+"getbyid?id="+authorId)
  }
}
