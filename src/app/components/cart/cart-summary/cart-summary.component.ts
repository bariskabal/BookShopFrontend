import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book/book';
import { BookDetail } from 'src/app/models/book/bookDetail';
import { CartItem } from 'src/app/models/cart/cartItem';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  books: BookDetail;
  items: CartItem[]
  totalPrice:number=0
  returnUrl: string;

  constructor(private cartService: CartService,private toastrService:ToastrService,private bookService:BookService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  deleteItem(item:CartItem){
    this.cartService.deleteItem(item);
    let domItem = document.getElementById(`cart-item`+item.book.id);
    window.location.reload()

  }
  addQty(item:CartItem){
    this.cartService.addQty(item);
    this.router.navigate([this.returnUrl])
  }
  

  
}
