import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address/address';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiUrl = "https://localhost:44323/api/addresses/";


constructor(private httpClient:HttpClient) { }

getById(id:number):Observable<ItemResponseModel<Address>>{
  return this.httpClient.get<ItemResponseModel<Address>>(this.apiUrl+"getbyid?id="+id);
}
getByUserId(userId:number):Observable<ListResponseModel<Address>>{
  return this.httpClient.get<ListResponseModel<Address>>(this.apiUrl+"getbyuserid?userid="+userId);
}
add(address: Address) : Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl + "add", address);
}
update(address: Address) : Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl + "update", address);
}
delete(address: Address) : Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", address);
}

}
