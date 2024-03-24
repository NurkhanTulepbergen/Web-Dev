import { Component } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import {Product, products} from "../products";

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrl: './product-by-category.component.css'
})

export class ProductByCategoryComponent {
  message: string;
  date: string = '';
  indexOfImage = 0;
  items = ['Almaty', 'Uralsk', 'Aktobe', 'Tashkent']
  constructor(private route: ActivatedRoute) {
    this.message = "Products"
    setInterval(()=> {
      this.date = new Date().toTimeString();
    }, 1000)
  }
  products: Product[] = [];

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const CategoryIdFormRoute = Number(routeParams.get("categoryId"));

    this.products = products.filter(products => products.categoryId == CategoryIdFormRoute);
  }


  like(product: Product){
    product.likes++;
    product.liked = true;
  }
  dislike(product: Product){
    product.likes--;
    product.liked = false;
  }

  delete(product: Product){
    const index = this.products.indexOf(product)

    if( index !== -1){
      this.products.splice(index, 1);
      window.alert(`${product.name} is deleted!`)
    }
    else{
      window.alert("Product not found!")
    }
  }

  share(productLink: string) {
    const shareMessage = `Check out: ${productLink}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
  }
  share2(productLink: string){
    const shareMessage = `Check out: ${productLink}`
    const telegram = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`
    window.location.href = telegram
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

  getDescriptionSlice(description: string): string{
    return description ? description.slice(0, 120) + '...' : '';
  }
  getNameSlice(name: string): string{
    return name ? name.slice(0, 33) + '...' : '';
  }


  nextImage(product: Product) {
    if (product.indexOfImage < product.img.length - 1) {
      product.indexOfImage += 1;
    }
  }

  prevImage(product: Product) {
    if (product.indexOfImage > 0) {
      product.indexOfImage -= 1;
    }
  }

  protected readonly console = console;
  protected readonly window = window;
}
