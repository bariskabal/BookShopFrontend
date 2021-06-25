import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book/book';
import { BookDetail } from 'src/app/models/book/bookDetail';
import { CartItem } from 'src/app/models/cart/cartItem';
import { UserInfos } from 'src/app/models/user/user-infos';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  book:BookDetail;
  bookId:number;
  cartItem:CartItem
  returnUrl:string = "/bookdetail/";

  cartItems:CartItem[]

  constructor(private bookService:BookService,private toastrService:ToastrService,private authService:AuthService,private cartService:CartService,private activatedRoute:ActivatedRoute,private localStorageService:LocalStorageService,private userService:UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.getByBookId(params["Id"]);
      }) 
      this.cartItem =this.cartService.getItems()
  }
  getByBookId(Id:number){
    this.bookId=Id
    this.bookService.getById(Id).subscribe(response=>{
      this.book=response.data[0]
    })
  }
    isLoggedIn() {
      return this.authService.isAuthenticated();
    }

    addToCart(book:BookDetail){
      this.cartService.addToCart(book)
      window.location.reload()
     
      
      
    }
  
}
