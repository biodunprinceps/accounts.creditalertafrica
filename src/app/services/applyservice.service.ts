import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Accept','application/json');

@Injectable({
  providedIn: 'root'
})
export class ApplyserviceService {

  constructor(private http:HttpClient) { }
  url: string = "https://testapi.creditwallet.ng/api/v2/creditalert";

  getOffer(data:any){
    return this.http.post<any>(`${this.url}/loan/apply`,data,{ 'headers': headers });
  }

  getOfferData(data:any){
    return this.http.post<any>(`${this.url}/loan/one`,data,{ 'headers': headers });
  }

  storeCameraCapture(data:any){
  //   const newheaders = new HttpHeaders()

  // .set('Content-Type', 'multipart/form-data')

    return this.http.post<any>(`${this.url}/loan/passport/upload`,data)
  }

  submitApplication(data:any){
    return this.http.post<any>(`${this.url}/loan/submit`,data);
  }
}
