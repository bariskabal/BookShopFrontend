import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { UserInfos } from 'src/app/models/user/user-infos';

@Injectable({
  providedIn: 'root'
})
export class UserService {

apiUrl = "https://localhost:44323/api/users/";

constructor(private httpClient:HttpClient) { }
getUserByEmail(email:string):Observable<ItemResponseModel<UserInfos>> {
  return this.httpClient.get<ItemResponseModel<UserInfos>>(this.apiUrl + "getbyemail?email=" + email);
}

updateUserInfos(user:UserInfos):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl + "updateinfos", user)
}
}
