import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartProduct } from '../model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //private baseUrl = "http://localhost:8080"
  private baseUrl = environment.url
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient:HttpClient) { }

  getCartItems():Observable<CartProduct[]>{
    // return this.httpClient.get<CartProduct[]>(`${this.baseUrl}/cart`);
    return this.httpClient.get<CartProduct[]>(`/cart`);

  }

  getTotal():Observable<any>{
    return this.httpClient.get(`/cart/total`)
  }

}
