import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product, products} from "./products";
import {categories} from "./category.service";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = products

  constructor(private http: HttpClient) {

  }

  getAllProducts(){
    return this.products
  }
  getProductsByCategoryId(categoryId: number){
    const filteredProducts = products.filter(product => product.categoryId === categoryId);
    return filteredProducts;
  }

}
