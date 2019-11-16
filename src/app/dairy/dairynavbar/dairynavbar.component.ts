import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dairynavbar',
  templateUrl: './dairynavbar.component.html',
  styleUrls: ['./dairynavbar.component.css']
})
export class DairynavbarComponent implements OnInit {

  username = localStorage.getItem('username');
  // username = "akhi";
  // var username = "";

  constructor() { }

  ngOnInit() {
  }
  

}
