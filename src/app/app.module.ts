import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookNewestsComponent } from './components/book/book-newests/book-newests.component';
import { BookPopularComponent } from './components/book/book-popular/book-popular.component';

import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/HomePage/HomePage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { StripComponent } from './components/strip/strip.component';
import { BookImageComponent } from './components/book/book-image/book-image.component';
import { CategoryPopularComponent } from './components/category/category-popular/category-popular.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookFilterComponent } from './components/book/book-filter/book-filter.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DiscoverComponent } from './components/discover/discover.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { AuthorImageComponent } from './components/author/author-image/author-image.component';
import { AuthorDetailComponent } from './components/author/author-detail/author-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BookSearchComponent } from './components/book/book-search/book-search.component';
import { UserInfosUpdateComponent } from './components/user/user-infos-update/user-infos-update.component';
import { UserPasswordUpdateComponent } from './components/user/user-password-update/user-password-update.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { CartSummaryComponent } from './components/cart/cart-summary/cart-summary.component';
import { CartDetailComponent } from './components/cart/cart-detail/cart-detail.component';
import { CheckOutComponent } from './components/CheckOut/CheckOut/CheckOut.component';
import { AddressListComponent } from './components/address/address-list/address-list.component';
import { CreditCardListComponent } from './components/creditCard/credit-card-list/credit-card-list.component';
import { CreditCardAddComponent } from './components/creditCard/credit-card-add/credit-card-add.component';
import { AddressAddComponent } from './components/address/address-add/address-add.component';


@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    BookPopularComponent,
    BookDetailComponent,
    DiscoverComponent,
    BookNewestsComponent,
    CategoryPopularComponent,
    StripComponent,
    BookImageComponent,
    CategoryListComponent,
    BookFilterComponent,
    BookListComponent,
    AuthorListComponent,
    AuthorImageComponent,
    AuthorDetailComponent,
    BookSearchComponent,
    LoginComponent,
    RegisterComponent,
    UserInfosUpdateComponent,
    UserPasswordUpdateComponent,
    ContactComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckOutComponent,
    AddressListComponent,
    CreditCardListComponent,
    CreditCardAddComponent,
    AddressAddComponent,
    FilterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
