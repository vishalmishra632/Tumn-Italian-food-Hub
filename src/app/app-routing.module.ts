import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MybillingaddressComponent } from './mybillingaddress/mybillingaddress.component';
import { MypersonalinformationComponent } from './mypersonalinformation/mypersonalinformation.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CustomerprivateareaComponent } from './customerprivatearea/customerprivatearea.component';
import { PageproductlistComponent } from './pageproductlist/pageproductlist.component';
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
//import { CategorytwoComponent } from './categorytwo/categorytwo.component';
//import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
//import { SinginComponent } from './singin/singin.component';
//import { SingupComponent } from './singup/singup.component';
//import { ProducerComponent } from './producer/producer.component';
//import { SearchresultComponent } from './searchresult/searchresult.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  //{ path: 'searchresult', component: SearchresultComponent },
  //{ path: 'categories', component: CategoriesComponent },
  //{ path: 'shoppingcart', component: ShoppingcartComponent },
  //{ path: 'checkout', component: CheckoutComponent },
  //{ path: 'blog', component: BlogComponent },
  //{ path: 'blogdetails', component: BlogdetailsComponent },
  //{ path: 'aboutus', component: AboutusComponent },
  //{ path: 'contactus', component: ContactComponent },
  //{ path: 'error', component: ErrorComponent },
  //{ path: 'faq', component: FaqComponent },
  //{ path: 'privacy&policy', component: PrivacypolicyComponent },
  //{ path: 'terms&conditions', component: TermsComponent },
  //{ path: 'thankyou', component: ThankyouComponent },
  //{ path: 'categorytwo', component: CategorytwoComponent },
  //{ path: 'forgotpassword', component: ForgotpasswordComponent },
  //{ path: 'singin', component: SinginComponent },
  //{ path: 'singup', component: SingupComponent },
  //{ path: 'producer', component: ProducerComponent },

  { path: 'myaccount', component: MyaccountComponent },
  { path: 'myaddress', component: MyaddressComponent },
  { path: 'mybillingaddress', component: MybillingaddressComponent },
  { path: 'mypersonalinformation', component: MypersonalinformationComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'ordersdetails', component: OrderdetailsComponent },
  { path: 'customerprivatearea', component: CustomerprivateareaComponent },
  { path: 'pageproductlist', component: PageproductlistComponent },
  

  { path: 'searchresult', loadChildren: './searchresult/searchresult.module#SearchresultModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'blogdetails', loadChildren: './blogdetails/blogdetails.module#BlogdetailsModule' },
  { path: 'categorytwo', loadChildren: './categorytwo/categorytwo.module#CategorytwoModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'contactus', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'error', loadChildren: './error/error.module#ErrorModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqModule' },
  { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordModule' },
  { path: 'privacy&policy', loadChildren: './privacypolicy/privacypolicy.module#PrivacypolicyModule' },
  { path: 'shoppingcart', loadChildren: './shoppingcart/shoppingcart.module#ShoppingcartModule' },
  { path: 'producer', loadChildren: './producer/producer.module#ProducerModule' },
  { path: 'terms&conditions', loadChildren: './terms/terms.module#TermsModule' },
  { path: 'thankyou', loadChildren: './thankyou/thankyou.module#ThankyouModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
  { path: 'singin', loadChildren: './singin/singin.module#SinginModule' },
  { path: 'singup', loadChildren: './singup/singup.module#SingupModule' },
  { path: 'product', loadChildren: './product/product.module#ProductModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
