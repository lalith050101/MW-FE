import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { UserToken } from '../model/user-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private baseUrl = "http://localhost:8080";
  private baseUrl = environment.url;
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient:HttpClient) { }

  login(cred:Login):Observable<UserToken>{
    return this.httpClient.post<UserToken>(`/login`,cred);
  }

  getUserStatus():Observable<UserToken>{
    return this.httpClient.get<UserToken>(`/userStatus`);
  }

}
