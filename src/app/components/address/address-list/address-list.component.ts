import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address/address';
import { AddressService } from 'src/app/services/address/address.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses:Address[];
  userId:number;
  email:string;



  constructor(private addressService:AddressService,private localStorage:LocalStorageService,private userService:UserService,private toastrService:ToastrService) { }

  ngOnInit() {
    this.email = this.localStorage.get("email")
    this.userService.getUserByEmail(this.email).subscribe(response=>{
      this.userId = response.data.id
      this.GetAddresses(this.userId)
    })
    
  }

  GetAddresses(userId:number){
    this.addressService.getByUserId(userId).subscribe(response=>{
      this.addresses =response.data
      console.log(this.addresses)
    })
  }
  getAddressId(id:number){
    this.localStorage.set("adressId",id);
    console.log(id)
  }
  deleteAddress(address:Address){
    console.log("içerdema")
    this.addressService.delete(address).subscribe(
      response => {
        this.toastrService.info("Adres silindi")
        setTimeout(() => { window.location.reload() }, 3000);
      },
      responseError => {
        this.toastrService.error(responseError.error)
      })
  }

}
