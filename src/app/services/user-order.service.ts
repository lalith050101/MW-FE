import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserOrder } from '../model/UserOrder';

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

  //private baseUrl = "http://localhost:8080";
  private baseUrl = environment.url;

  constructor(private httpClient:HttpClient) { }

  getOrders():Observable<any>{
    return this.httpClient.post<any>(`/orders`,true);
  }

}
