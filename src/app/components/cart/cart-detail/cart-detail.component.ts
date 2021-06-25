import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cart/cartItem';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cartItems:CartItem[];
  totalPrice:number=0;
  totalPrices:number=0

  constructor(private cartService:CartService,private toastrService:ToastrService) { }

  ngOnInit() {
   this.cartItems= this.cartService?.getItems()
   this.calculateTotalPrice(this?.cartItems)
    
  }
  deleteItem(item:CartItem){
    this.cartService.deleteItem(item);
    let domItem = document.getElementById(`cart-item`+item.book.id);
    window.location.reload()

  }
  addQty(item:CartItem){
    this.cartService.addQty(item);
    window.location.reload()
  }

  calculateTotalPrice(cartItems:CartItem[]){
    for (let i = 0; i < cartItems?.length; i++) {
      const element = cartItems[i];
      this.totalPrice += element.quantity*element.book.unitPrice
    }
    this.totalPrices = this.totalPrice+10
  }
  

}
