import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/author/author';
import { AuthorDetail } from 'src/app/models/author/authorDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  apiUrl = "https://localhost:44323/api/authors/";


constructor(private httpClient:HttpClient) { }

getAuthors():Observable<ListResponseModel<Author>>{
  return this.httpClient.get<ListResponseModel<Author>>(this.apiUrl+"getall")
}
getById(Id:number):Observable<ListResponseModel<AuthorDetail>>{
  return this.httpClient.get<ListResponseModel<AuthorDetail>>(this.apiUrl+"getbyid?id="+Id);
}

}
