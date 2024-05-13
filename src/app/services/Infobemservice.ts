import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

interface Response {
  data: any;
}

@Injectable({ providedIn: 'root' })
export class Infobemservice {

  sidenavOpen: boolean = false;
  paymentSidenavOpen: boolean = false;
  isDirectionRtl: boolean = false;
  featuredProductsSelectedTab: any = 0;
  newArrivalSelectedTab: any = 0;

  /**** Get currency code:- https://en.wikipedia.org/wiki/ISO_4217 *****/
  currency: string = 'USD';
  language: string = 'english';

  shipping: number = 12.95;
  tax: number = 27.95;
  localStorageCartProducts: any;
  localStorageWishlist: any;
  navbarCartCount: number = 0;
  navbarWishlistProdCount = 0;
  buyUserCartProducts: any;

  constructor(private http: HttpClient) {

    localStorage.removeItem("user");
    localStorage.removeItem("byProductDetails");
  }

  public setCartItemDefaultValue(setCartItemDefaultValue) {

  }

  public reviewPopup(singleProductDetails, reviews) {

  }

  public confirmationPopup(message: string) {

  }

  public getProducts() {

  }



}
