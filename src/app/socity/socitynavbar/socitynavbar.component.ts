import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socitynavbar',
  templateUrl: './socitynavbar.component.html',
  styleUrls: ['./socitynavbar.component.css']
})
export class SocitynavbarComponent implements OnInit {

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
