import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressAddComponent } from './components/address/address-add/address-add.component';
import { AuthorDetailComponent } from './components/author/author-detail/author-detail.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { CartDetailComponent } from './components/cart/cart-detail/cart-detail.component';
import { CheckOutComponent } from './components/CheckOut/CheckOut/CheckOut.component';
import { CreditCardAddComponent } from './components/creditCard/credit-card-add/credit-card-add.component';
import { HomePageComponent } from './components/HomePage/HomePage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserInfosUpdateComponent } from './components/user/user-infos-update/user-infos-update.component';
import { UserPasswordUpdateComponent } from './components/user/user-password-update/user-password-update.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomePageComponent},
  {path:"books",component:BookListComponent},
  {path:"search",component:BookListComponent},
  {path:"search/bookdetail/:Id",component:BookListComponent},
  {path:"books/book/booklist",component:BookListComponent},
  {path:"books/:authorId",component:BookListComponent},
  {path:"books/:textFilter",component:BookListComponent},
  {path:"books/:categoryId",component:BookListComponent},
  {path:"books/:authorId/:categoryId",component:BookListComponent},
  {path:"books/book/bookdetail/:Id",component:BookDetailComponent},
  {path:"bookdetail/:Id",component:BookDetailComponent},
  {path:"books/book/author/authors",component:AuthorListComponent},
  {path:"books/:categoryId/book/author/authors",component:AuthorListComponent},
  {path:"books/:authorId/:categoryId/book/author/authors",component:AuthorListComponent},
  {path:"books/book/bookdetail/:Id/book/author/authors",component:AuthorListComponent},
  {path:"books/:authorId/book/bookdetail/:Id/book/author/authors",component:AuthorListComponent},
  {path:"books/:categoryId/book/bookdetail/:Id/book/author/authors",component:AuthorListComponent},
  {path:"books/:authorId/:categoryId/book/bookdetail/:Id/book/author/authors",component:AuthorListComponent},
  {path:"authors",component:AuthorListComponent},
  {path:"books/authors",component:AuthorListComponent},
  {path:"authors/authordetail/:Id",component:AuthorDetailComponent},
  {path:"authors/authordetail/:Id",component:AuthorDetailComponent},
  {path:"authors/authordetail/:Id/book/bookdetail/:Id",component:BookDetailComponent},
  {path:"login",component:LoginComponent},
  {path:"books/login",component:LoginComponent},
  {path:"register/login",component:LoginComponent},
  {path:"login/register",component:RegisterComponent},
  {path:"register",component:RegisterComponent},
  {path:"books/register/login",component:LoginComponent},
  {path:"books/login/register",component:RegisterComponent},
  {path: "updateinfos", component:UserInfosUpdateComponent},
  {path: "updatepassword", component:UserPasswordUpdateComponent},
  {path: "sepetim/basket", component:CartDetailComponent},
  {path: "checkout", component:CheckOutComponent},
  {path: "creditcardAdd", component:CreditCardAddComponent},
  {path: "addressAdd", component:AddressAddComponent},
  {path: "contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
