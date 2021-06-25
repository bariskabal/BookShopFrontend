import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { CreditCardService } from 'src/app/services/creditCard/creditCard.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {

  creditCards:CreditCard[]
  userId:number;
  email:string;
  creditCardId:number;
 


  constructor(private creditCardService:CreditCardService,private userService:UserService,private localStorage:LocalStorageService,private toastrService:ToastrService,private router:Router) { }

  ngOnInit() {
    this.email = this.localStorage.get("email")
    this.userService.getUserByEmail(this.email).subscribe(response=>{
      this.userId = response.data.id
      this.getCreditCard(this.userId)
    })
  }

  getCreditCard(userId:number){
    this.creditCardService.getByUserId(userId).subscribe(response=>{
      this.creditCards=response.data
    })
  }
  getCreditCardId(id:number){
    this.localStorage.set("creditCardId",id);
    console.log(id)
  }
  deleteCreditCard(creditCard:CreditCard){
    console.log("içerdema")
    this.creditCardService.delete(creditCard).subscribe(
      response => {
        this.toastrService.info("Kredi kartı silindi")
        setTimeout(() => { window.location.reload() }, 3000);
      },
      responseError => {
        this.toastrService.error(responseError.error)
      })
  }

}
