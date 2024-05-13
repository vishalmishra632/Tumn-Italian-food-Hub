import { Component, OnInit, HostListener } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 currentPage = 1;
  constructor() { }

  ngOnInit() { }

}
