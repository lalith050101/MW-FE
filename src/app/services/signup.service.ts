import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Signup } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  //private baseUrl = "http://localhost:8080";
  private baseUrl = environment.url;

  constructor(private httpClient:HttpClient) { }

  register(cred:Signup):Observable<Object>{
    return this.httpClient.post(`/signup`,cred);
  }
}
