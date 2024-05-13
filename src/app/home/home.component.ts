import { Component, OnInit, HostListener, AfterViewInit, AfterViewChecked, ChangeDetectorRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { Infobemservice } from 'src/app/services/Infobemservice';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from '../services/animation';

declare var $: any;
declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class HomeComponent implements OnInit {


  constructor(public infobemservice: Infobemservice) {
    
  }

  ngOnInit() {
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

    this.productData = [];
    this.carouselProductItems$ = interval(500).pipe(
      startWith(-1),
      take(6),
      map(val => {
        const pdata = (this.productData = [
          ...this.productData,
          this.prodcutimg[Math.floor(Math.random() * this.prodcutimg.length)]
        ]);
        return pdata;
      })
    );

    this.bestProductData = [];
    this.carouselBestProductItems$ = interval(500).pipe(
      startWith(-1),
      take(6),
      map(val => {
        const pdata = (this.bestProductData = [
          ...this.bestProductData,
          this.prodcutimg[Math.floor(Math.random() * this.prodcutimg.length)]
        ]);
        return pdata;
      })
    );

  }

  imgags = [
    'assets/img/s1.jpg',
    'assets/img/s2.jpg',
    'assets/img/cat1.jpg',
    'assets/img/cat2.jpg'  
  ];

  prodcutimg = [
    'assets/img/s1.jpg',
    'assets/img/s2.jpg',
    'assets/img/cat1.jpg',
    'assets/img/cat2.jpg'    
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

  tempData: any[];

  public carouselProductItems$: Observable<number[]>;
  public carouselProductConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
    speed: 400,
    slide: 1,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    RTL: false,
    load: 1,
    interval: { timing: 4000 },
    animation: 'lazy'
  };
  public carouselProductConfigRtl: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
    speed: 400,
    slide: 1,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    RTL: true,
    load: 1,
    interval: { timing: 4000 },
    animation: 'lazy'
  };
  productData: any[];

  public carouselBestProductItems$: Observable<number[]>;
  public carouselBestProductConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
    speed: 400,
    slide: 1,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    RTL: false,
    load: 1,
    interval: { timing: 4000 },
    animation: 'lazy'
  };
  public carouselBestProductConfigRtl: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
    speed: 400,
    slide: 1,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    RTL: true,
    load: 1,
    interval: { timing: 4000 },
    animation: 'lazy'
  };
  bestProductData: any[];

}
