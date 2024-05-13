import { Component, HostListener } from '@angular/core';
import { Infobemservice } from './services/Infobemservice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  



  title = 'Infobem';
  isRtl: any;


  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  router: string;
 
  constructor(public infobemservice: Infobemservice, public _router: Router) {

    this._router.events.subscribe(() => this.router = this._router.url);
    
    if (this.infobemservice.isDirectionRtl) {
      this.isRtl = 'rtl';
    } else {
      this.isRtl = 'ltr';
    }


  }

  public changeDirection() {
    if (this.isRtl == "rtl") {
      this.isRtl = "ltr";
      this.infobemservice.isDirectionRtl = false;
    } else {
      this.isRtl = "rtl"
      this.infobemservice.isDirectionRtl = true;
    }

    this.infobemservice.featuredProductsSelectedTab = 0;
    this.infobemservice.newArrivalSelectedTab = 0;
  }

  onActivate(event) {
    window.scroll(0, 0);
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    }
    else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

}
