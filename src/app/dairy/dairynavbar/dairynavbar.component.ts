import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dairynavbar',
  templateUrl: './dairynavbar.component.html',
  styleUrls: ['./dairynavbar.component.css']
})
export class DairynavbarComponent implements OnInit {

  username = localStorage.getItem('username');

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigate(){
    var logout = confirm('Are You Sure Logout?');
    if(logout == true){
      this.router.navigate(['/']);
    }
  }
  

}
