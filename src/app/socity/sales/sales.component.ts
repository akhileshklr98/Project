import { Component, OnInit } from '@angular/core';
import { ISales } from '../../sales.modal';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MilmaService } from 'src/app/milma.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sale = new ISales(null,null,null,null,null);
  constructor(public milmaService: MilmaService) { }

  ngOnInit() {
    var soname = localStorage.getItem('socityname');
    // console.log(soname);
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = year + "-" + month + "-" + day;
    this.sale.Date = currentDate;
    this.sale.socityName = soname;
  }

  onKey(event: any) {
    const price = this.sale.todayPrice;
    const qty = this.sale.totalQty;
    var total = price * qty;
    console.log(total);
    this.sale.totalAmount = total;
  }

  addSales(f: NgForm){
    this.milmaService.addsale(this.sale).subscribe( data=>{
      if(data !=null){
        alert('Successfully Added Today Sale....')
        f.resetForm();
        this.ngOnInit();
      }
    });

  }

}
