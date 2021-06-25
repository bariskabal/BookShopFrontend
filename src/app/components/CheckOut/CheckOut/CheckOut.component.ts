import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart/cart.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-CheckOut',
  templateUrl: './CheckOut.component.html',
  styleUrls: ['./CheckOut.component.css']
})
export class CheckOutComponent implements OnInit {



  constructor(private toastrService:ToastrService,private router:Router,private localStorage:LocalStorageService,private cartService:CartService) { }

  ngOnInit() {

  }

  checkOut(){
    this.toastrService.success("Sipariş tamamlandı.");
    this.router.navigate([""])
    this.cartService.clearCart()
  }
  

}
