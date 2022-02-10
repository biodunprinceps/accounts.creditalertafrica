import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  private localUrl = "http://127.0.0.1:8000/api/v1";
  private baseUrl = "https://testapi.creditwallet.ng/api/v2/creditalert";

  login(user:any){
    return this.http.post<any>(`${this.baseUrl}/user/login`,user);
  }

  loadDashboard(){
    return this.http.get<any>(`${this.baseUrl}/user/dashboard`)
  }

  changePassword(data:any){
    return this.http.post<any>(`${this.baseUrl}/user/password/change`,data)
  }

}
