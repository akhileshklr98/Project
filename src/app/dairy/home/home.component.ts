import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { MilmaService } from 'src/app/milma.service';
import { IUser } from '../../milma.modal';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // barCahrt = [];
  Player = ['1234'];
  Run = ['40'];
  // data: any ={};

  report = new IUser(null,null,null,null,null,null,null,null);

  constructor(public http: HttpClient, public milmaService: MilmaService) { }

  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // // public barChartLabels = "";
  // public barChartLabels = ['ABC Socity', 'XYZ Socity'];
  // public barChartType = 'bar';
  // public barChartLegend = true;
  // public barChartData = [
  //   {data: [65, 59], label: 'Sale'},
  //   {data: [28, 48], label: 'Sponsor'}
  // ];

  ngOnInit() {
    this.milmaService.getReport().subscribe( data=>{
      this.report = JSON.parse(JSON.stringify(data));
      // this.barChartLabels = result[0].socityName;
      console.log(this.report[0].socityName);
      console.log(this.report[0].sale[0].totalQty)
    })
    
    // var barCahrt = new Chart('canvas', {  
    //   type: 'bar',  
    //   data: {  
    //     labels: this.Player,  
    //     datasets: [  
    //       {  
    //         data: this.Run,  
    //         borderColor: '#3cba9f',  
    //         backgroundColor: [    
    //           "Blue",  
    //           "Red",  
    //           "Blue"  
    //         ],  
    //         fill: true  
    //       }  
    //     ]  
    //   },  
    //   options: {  
    //     legend: {  
    //       display: false  
    //     },  
    //     scales: {  
    //       xAxes: [{  
    //         display: true  
    //       }],  
    //       yAxes: [{  
    //         display: true  
    //       }],  
    //     }  
    //   }  
    // }); 
  }

}
