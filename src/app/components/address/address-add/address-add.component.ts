import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address/address';
import { AddressService } from 'src/app/services/address/address.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.css']
})
export class AddressAddComponent implements OnInit {


  addressAddForm:FormGroup;
  email:string
  userId:number;

  constructor(private formBuilder:FormBuilder,
    private addressService:AddressService,
    private toastrService:ToastrService,
    private router:Router,
    private userService:UserService,
    private localStorage:LocalStorageService) { }

  ngOnInit() {
    this.createAddressForm();
    this.email = this.localStorage.get("email")
    this.userService.getUserByEmail(this.email).subscribe(response=>{
      this.userId=response.data.id
      console.log(this.userId)
    })
  }
  createAddressForm(){
    this.addressAddForm = this.formBuilder.group({
      city: ["",Validators.required],
      addressName: ["",Validators.required],
      description: ["",Validators.required],
      gsm:["",Validators.required],
    })
  }

  add() {
    if(this.addressAddForm.valid) {

      let creditCardModel:Address = Object.assign({},this.addressAddForm.value)
      creditCardModel.userId=this.userId
      console.log(creditCardModel.userId)

      this.addressService.add(creditCardModel).subscribe(
        response => {
          this.toastrService.info("Adres eklendi")
          setTimeout(() => { this.router.navigate(['/checkout']) }, 3000);
        },
        responseError => {
          this.toastrService.error(responseError.error)
        })
      }
  }

}
