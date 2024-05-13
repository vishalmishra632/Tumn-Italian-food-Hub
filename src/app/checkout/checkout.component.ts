import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  //router: string;
  constructor(private _router: Router) {
    //this._router.events.subscribe(() => this.router = this._router.url);
  }

  ngOnInit() {
  }

}
