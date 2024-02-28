import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent} from "./cart/cart.component";
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from "./shipping/shipping.component";
import { DateComponent} from "./date/date.component";
import { CategoryComponent } from "./category/category.component";
import { MainPageComponent} from "./main-page/main-page.component";
import { ProductByCategoryComponent } from "./product-by-category/product-by-category.component";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'category/:categoryId', component: ProductByCategoryComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'date', component: DateComponent},

    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    DateComponent,
    CategoryComponent,
    MainPageComponent,
    ProductByCategoryComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/