import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MilmaService {

  constructor(public http: HttpClient) { }

  login(user){
    return this.http.post("http://localhost:3000/login",{user});
  }

  register(socity){
    return this.http.post("http://localhost:3000/addSocity",{socity: socity});
  }

  addsale(sale){
    return this.http.post("http://localhost:3000/addSale",{sale: sale});
  }
  
  buy(milma){
    return this.http.post("http://localhost:3000/addFarmerDetails",{farmer: milma});
  }
}
