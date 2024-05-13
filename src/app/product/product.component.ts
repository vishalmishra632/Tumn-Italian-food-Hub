import { Component, OnInit, HostListener, AfterViewInit, AfterViewChecked, ChangeDetectorRef, Input, ChangeDetectionStrategy, Output, EventEmitter, } from '@angular/core';
import { Infobemservice } from '../services/Infobemservice';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from '../services/animation';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, AfterViewInit, AfterViewChecked {
  productsArray: any;
  prodcuts: any;
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, public infobemservice: Infobemservice) {

  }




  ngOnInit() {
    this.inputName = this.itemId + '_rating';

    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(6),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );

  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
  ngAfterViewChecked() {
    //this.carouselTileItems.forEach(el => {
    //  this.carouselTileLoad(el);
    //});
  }
  ngAfterViewInit() {

    //$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
    //  var next = $(this).next();
    //  if (!next.length) {
    //    next = $(this).siblings(':first');
    //  }
    //  next.children(':first-child').clone().appendTo($(this));

    //  for (var i = 0; i < 3; i++) {
    //    next = next.next();
    //    if (!next.length) {
    //      next = $(this).siblings(':first');
    //    }
    //    next.children(':first-child').clone().appendTo($(this));
    //  }
    //});
  }

  imgags = [
    'assets/img/product-slider/01.jpg',
    'assets/img/product-slider/02.jpg',
    'assets/img/product-slider/03.jpg',
    'assets/img/product-slider/04.jpg'
  ];

  //new
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
    speed: 400,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    load: 1,
    RTL: false,
    interval: { timing: 4000 },
    animation: 'lazy'
  };
  tempData: any[];

  public carouselTileConfigRtl: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
    speed: 400,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    load: 1,
    RTL: true,
    interval: { timing: 4000 },
    animation: 'lazy'
  };

}
