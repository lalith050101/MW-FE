import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartProduct } from '../model/Cart';
import { Product } from '../model/product';
import { UserOrder } from '../model/UserOrder';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //private baseUrl = "http://localhost:8080";
  private baseUrl = environment.url;
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient:HttpClient) { }

  getProduct(id:string):Observable<Product>{
    return this.httpClient.get<Product>(`/product/${id}`)
  }
  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`/home`);
  }

  addToCart(id:string,quantity:number):Observable<CartProduct>{
    return this.httpClient.post<CartProduct>(`/home/${id}`,{'id':id,'quantity':quantity});
  }

  getCartInfo(productId:string):Observable<CartProduct>{
    return this.httpClient.get<CartProduct>(`/home/${productId}`);
  }

  removeFromCart(id:string):Observable<Object>{
    return this.httpClient.post(`/cart/delete`,id);
  }

  getRecentBuys():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`/getRecentBuys`);
  }
}
