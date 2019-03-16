import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OwnerDetailService {

  constructor(private http:HttpClient) { }
  
    showOwnerData(){
      const url = "http://localhost:8082/owners";
      return this.http.get(url);
    }
}
