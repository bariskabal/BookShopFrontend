import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { CreditCardService } from 'src/app/services/creditCard/creditCard.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent implements OnInit {

  creditCardAddForm:FormGroup;
  email:string
  userId:number;


  constructor(private formBuilder:FormBuilder,
    private creditCardService:CreditCardService,
    private toastrService:ToastrService,
    private router:Router,
    private userService:UserService,
    private localStorage:LocalStorageService
    ) { }

  ngOnInit() {
    this.createCreditCardForm();
    this.email = this.localStorage.get("email")
    this.userService.getUserByEmail(this.email).subscribe(response=>{
      this.userId=response.data.id
      console.log(this.userId)
    })
  }
  createCreditCardForm(){
    this.creditCardAddForm = this.formBuilder.group({
      cardName: ["",Validators.required],
      cardNumber: ["",Validators.required],
      mounth: ["",Validators.required],
      year:["",Validators.required],
      cvv:["",Validators.required],
    })
  }

  add() {
    if(this.creditCardAddForm.valid) {

      let creditCardModel:CreditCard = Object.assign({},this.creditCardAddForm.value)
      creditCardModel.userId=this.userId
      console.log(creditCardModel.userId)

      this.creditCardService.add(creditCardModel).subscribe(
        response => {
          this.toastrService.info("Kredi kartı eklendi")
          setTimeout(() => { this.router.navigate(['/checkout']) }, 3000);
        },
        responseError => {
          this.toastrService.error(responseError.error)
        })
      }
  }
}
