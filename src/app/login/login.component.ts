import { Component, OnInit } from '@angular/core';
import { MilmaService } from '../milma.service';
import { Router } from '@angular/router';
import { IUser } from '../milma.modal';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [MilmaService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user: IUser [];
  socity = new IUser(null,null,null,null,null,null,null,null);

  constructor(public milmaService: MilmaService, public router: Router) { }

  ngOnInit() {
  }

  userLogin(){
    var userName = this.socity.userName;
    var passWord = this.socity.passWord;
    var users = {"name":userName,"pass":passWord}
    this.milmaService.login(users)
    .subscribe( data=>{
      this.socity = JSON.parse(JSON.stringify(data));
      // console.log(this.socity.isAdmin);
      // console.log(data);
        if(this.socity == null){
        alert("Invalid Username or Password");
      }else{
        localStorage.setItem('username',this.socity.userName);
        console.log("Login Successfully");
        if(this.socity.isAdmin == 1){
          console.log('Admin');
          this.router.navigate(["dairy"]);
        }else{
          console.log('user');
          this.router.navigate(['socity']);
        }
      }
    });
  }

}
