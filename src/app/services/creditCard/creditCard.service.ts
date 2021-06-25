import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl = "https://localhost:44323/api/creditcards/";


constructor(private httpClient:HttpClient) { }

getById(id:number):Observable<ItemResponseModel<CreditCard>>{
  return this.httpClient.get<ItemResponseModel<CreditCard>>(this.apiUrl+"getbyid?id="+id);
}
getByUserId(userId:number):Observable<ListResponseModel<CreditCard>>{
  return this.httpClient.get<ListResponseModel<CreditCard>>(this.apiUrl+"getbyuserid?userid="+userId);
}
add(creditCard: CreditCard) : Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl + "add", creditCard);
}
update(creditCard: CreditCard) : Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl + "update", creditCard);
}
delete(creditCard: CreditCard) : Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", creditCard);
}
}
