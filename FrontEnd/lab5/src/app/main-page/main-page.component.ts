import { Component } from '@angular/core';
import {categories} from "../category.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  categories = categories;
}
