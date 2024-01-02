import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  imgUrl:string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Bouquet Eve', price: 45.00, amount: 0,imgUrl:'assets/Fleur1.jpg' },
    { id: 1, name: 'Bouquet la perle', price: 50.00, amount: 0,imgUrl:'assets/Fleur2.jpg'},
    { id: 2, name: 'Bouquet tanit', price: 40.00, amount: 0,imgUrl:'assets/Fleur3.jpg' },
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor(public http:HttpClient) {}
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
  postinfoClient(data:any){
    return this.http.post('http://localhost/ecommerce/index.php/Api/Products/insereInfo',data);
  }
}
