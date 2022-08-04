import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../model/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 // private baseUrl = "http://localhost:8080";
  private baseUrl = environment.url;
  constructor(private httpClient:HttpClient) { }

  getUserInfo():Observable<UserDetails>{
    return this.httpClient.get<UserDetails>(`/profile`);
  }

  updateUserInfo(data:UserDetails):Observable<Object>{
    return this.httpClient.post(`/profile`,data)
  }
}
