import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book/book';
import { BookDetail } from 'src/app/models/book/bookDetail';
import { CartItem } from 'src/app/models/cart/cartItem';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { LocalStorageService } from '../localStorage/local-storage.service';



let itemsInCart = [];
let cart = [];
//console.log("itemsInCart: ", itemsInCart);
@Injectable({
  providedIn: 'root'
})
export class CartService {

  book: BookDetail;
  items: CartItem;

  constructor(private toastr:ToastrService,private localStorageService:LocalStorageService) { }

  addToCart(book: BookDetail) {
    let local_storage;
    let itemsInCart = []
    this.items = {
      book: book,
      quantity: 1,
    }
    if(localStorage.getItem('cart')  == null){
      local_storage =[];
      console.log("LOCALSTORAGE NULL",JSON.parse(localStorage.getItem('cart')));
      itemsInCart.push(this.items);
      localStorage.setItem('cart', JSON.stringify(itemsInCart));
      console.log('Pushed first Item: ', itemsInCart);
    }
    else
    {
      local_storage = JSON.parse(localStorage.getItem('cart'));
      console.log("LOCAL STORAGE HAS ITEMS",JSON.parse(localStorage.getItem('cart')));
      for(var i in local_storage)
      {
        console.log(local_storage[i].book?.id);
        if(this.items.book.id == local_storage[i].book.id)
        {
          local_storage[i].quantity += 1;
          console.log("Quantity for "+i+" : "+ local_storage[i].quantity);
          console.log('same product! index is ', i); 
          this.items=null;
          break;  
        }
    }
    if(this.items){
      itemsInCart.push(this.items);
    }
    local_storage.forEach(function (item:CartItem){
      itemsInCart.push(item);
    })
    localStorage.setItem('cart', JSON.stringify(itemsInCart));

    }
  }
  getItems(){
   console.log("Cart: ", JSON.parse(localStorage.getItem('cart')));
   return this.items = JSON.parse(localStorage.getItem('cart'));

   //return this.items = 
  }
  deleteItem(item:CartItem){
    item = item;
    console.log("Deleting : ",item);
    let shopping_cart;
    let index;
    shopping_cart = JSON.parse(localStorage.getItem('cart'));
    for(let i in shopping_cart){
      if (item.book.bookName == shopping_cart[i].book.bookName)
      {
        if (shopping_cart[i].quantity<=1) {
          shopping_cart.splice(index, 1);
          console.log("shopping_cart ", shopping_cart);
          localStorage.setItem('cart', JSON.stringify(shopping_cart));
        }
        else{
          shopping_cart[i].quantity-=1
          localStorage.setItem('cart', JSON.stringify(shopping_cart));
          console.log("quantity update")
        }
        
      }
    }
    

  }
  addQty(item: CartItem)
  {
    item = item;
    let shopping_cart;
    shopping_cart = JSON.parse(localStorage.getItem('cart'));
    for(let i in shopping_cart){
      if(item.book.bookName == shopping_cart[i].book.bookName){
        if (item.book.unitsInStock>shopping_cart[i].quantity) {
          shopping_cart[i].quantity +=1;
          item = null;
          break;
        }
        else{
          this.toastr.error("bu ürün daha fazla eklenemez")
        }
      }
    }
    localStorage.setItem('cart', JSON.stringify(shopping_cart));

  }
  numberOfItems(){
    let itemsInCart = JSON.parse(localStorage.getItem('cart'));
    return itemsInCart.length;
  }
  clearCart(){
    this.localStorageService.remove("cart")
  }
}