import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/milma.modal';
import { MilmaService } from 'src/app/milma.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  socities: IUser[];

  constructor(public milmaService: MilmaService) { }

  ngOnInit() {
    this.milmaService.getSocities().subscribe( data=>{
      console.log(data);
      this.socities = JSON.parse(JSON.stringify(data));
      console.log(this.socities);
    })
  }

}
