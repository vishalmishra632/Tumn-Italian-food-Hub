import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Infobemservice } from 'src/app/services/Infobemservice';
import { NguCarouselModule } from '@ngu/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeadderComponent } from './headder/headder.component';


import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MybillingaddressComponent } from './mybillingaddress/mybillingaddress.component';
import { MypersonalinformationComponent } from './mypersonalinformation/mypersonalinformation.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CustomerprivateareaComponent } from './customerprivatearea/customerprivatearea.component';
import { PageproductlistComponent } from './pageproductlist/pageproductlist.component';



//import { SearchresultComponent } from './searchresult/searchresult.component';
//import { CategoriesComponent } from './categories/categories.component';
//import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
//import { CheckoutComponent } from './checkout/checkout.component';
//import { BlogComponent } from './blog/blog.component';
//import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
//import { AboutusComponent } from './aboutus/aboutus.component';
//import { ContactComponent } from './contact/contact.component';
//import { ErrorComponent } from './error/error.component';
//import { FaqComponent } from './faq/faq.component';
//import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
//import { TermsComponent } from './terms/terms.component';
//import { ThankyouComponent } from './thankyou/thankyou.component';
//import { SingupComponent } from './singup/singup.component';
//import { SinginComponent } from './singin/singin.component';
//import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
//import { CategorytwoComponent } from './categorytwo/categorytwo.component';
//import { ProducerComponent } from './producer/producer.component';





@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent,
    FooterComponent,
    HeadderComponent,
    MyaccountComponent,
    MyaddressComponent,
    MybillingaddressComponent,
    MypersonalinformationComponent,
    OrdersComponent,
    OrderdetailsComponent,
    CustomerprivateareaComponent,
    PageproductlistComponent
 

    //SearchresultComponent
    //CategoriesComponent,
    //ShoppingcartComponent,
    //CheckoutComponent,
    //BlogComponent,
    //BlogdetailsComponent,
    //AboutusComponent,
    //ContactComponent,
    //ErrorComponent,
    //FaqComponent,
    //PrivacypolicyComponent,
    //TermsComponent,
    //ThankyouComponent,
    //SingupComponent,
    //SinginComponent,
    ////ForgotpasswordComponent,
    //CategorytwoComponent,
    //ProducerComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NguCarouselModule,
    NgbModule
 
  

  ],
  providers: [Infobemservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
