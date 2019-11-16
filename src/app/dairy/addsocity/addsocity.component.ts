import { Component, OnInit } from '@angular/core';
import { IUser } from '../../milma.modal';
import { MilmaService } from '../../milma.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-addsocity',
  templateUrl: './addsocity.component.html',
  styleUrls: ['./addsocity.component.css']
})
export class AddsocityComponent implements OnInit {

  model = new IUser(null,null,null,null,null,null,null,null); 

  constructor(public milmaService: MilmaService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('service')
    this.milmaService.register(this.model).subscribe( data=>{
      console.log(data);
    });
  }

}
