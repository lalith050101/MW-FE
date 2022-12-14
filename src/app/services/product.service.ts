import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private baseUrl = "http://localhost:8080";
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient: HttpClient) { 

  }
  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`/admin`);
  }

  addProduct(product:Product):Observable<Object>{
    return this.httpClient.post(`/admin/addProduct`,product);
  } 
  getProductById(id:string):Observable<Product>{
    return this.httpClient.get<Product>(`/admin/productEdit/${id}`);
  }
  saveProductById(id:string,product:Product):Observable<Object>{
    return this.httpClient.post(`/admin/productEdit/${id}`,product);
  }
  deleteProductById(id:string):Observable<Object>{
    return this.httpClient.get(`/admin/delete/${id}`);
  }
}
