import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MilmaService {

  constructor(public http: HttpClient) { }

  login(user){
    return this.http.post("https://project-app-backend.herokuapp.com/login",{user});
    // return this.http.post("http://localhost:3000/login",{user});
  }

  register(socity){
    return this.http.post("https://project-app-backend.herokuapp.com/addSocity",{socity: socity});
    // return this.http.post("http://localhost:3000/addSocity",{socity: socity});
  }

  addsale(sale){
    return this.http.post("https://project-app-backend.herokuapp.com/addSale",{sale: sale});
    // return this.http.post("http://localhost:3000/addSale",{sale: sale});
  }
  
  buy(milma){
    return this.http.post("https://project-app-backend.herokuapp.com/addFarmerDetails",{farmer: milma});
    // return this.http.post("http://localhost:3000/addFarmerDetails",{farmer: milma});
  }

  getSocities(){
    return this.http.get("https://project-app-backend.herokuapp.com/socities");
    // return this.http.get("http://localhost:3000/socities");
  }

  getReport(){
    return this.http.get("https://project-app-backend.herokuapp.com/report");
    // return this.http.get("http://localhost:3000/report");
  }
}
