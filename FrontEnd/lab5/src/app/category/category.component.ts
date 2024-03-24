import { Component } from '@angular/core';
import {categories} from "../category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor() {

  }

  protected readonly categories = categories;
}
