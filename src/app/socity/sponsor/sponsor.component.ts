import { Component, OnInit } from '@angular/core';
import { IFarmer } from 'src/app/farmer.modal';
import { MilmaService } from 'src/app/milma.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  farmer = new IFarmer(null,null,null,null,null,null);

  constructor(public milmaService: MilmaService) { }

  ngOnInit() {
    var socityName = localStorage.getItem('socityname');
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = year + "-" + month + "-" + day;
    this.farmer.Date = currentDate;
    this.farmer.socityName = socityName;
  }

  onKey(event: any) {
    const price = this.farmer.todayPrice;
    const qty = this.farmer.totalQty;
    var total = price * qty;
    console.log(total);
    this.farmer.totalAmount = total;
  }

  addFarmerDetails(f: NgForm){
    this.milmaService.buy(this.farmer).subscribe( data=>{
      // console.log(data);
      if(data !=null){
        alert("Successfully Added Farmer Details");
        f.resetForm();
        this.ngOnInit();
      }
    });
  }

}
