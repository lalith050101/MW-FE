import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  //private baseUrl = "http://localhost:8080";
  private baseUrl = environment.url;
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient:HttpClient) { }

  placeSingleProduct(obj:any){
    console.log('Single');
    return this.httpClient.post(`/placeOrder`,obj)
  }
  placeCartProducts(obj:any){
    console.log("cart");
    return this.httpClient.post(`/saveOrder`,obj)
  }
}
