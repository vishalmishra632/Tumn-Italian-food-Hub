import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageproductlist',
  templateUrl: './pageproductlist.component.html',
  styleUrls: ['./pageproductlist.component.css']
})
export class PageproductlistComponent implements OnInit {
  currentPage = 1;
  constructor() { }

  ngOnInit() {
  }

}
