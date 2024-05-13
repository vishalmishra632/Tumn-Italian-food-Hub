import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  //router: string;
  constructor(private _router: Router) {
    //console.log(this._router.url);
    //this._router.events.subscribe(() => this.router = this._router.url);

  }

  ngOnInit() {
  }

 

}
