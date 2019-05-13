import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maches',
  templateUrl: './maches.component.html',
  styleUrls: ['./maches.component.css']
})
export class MachesComponent implements OnInit {
  Data = {};
  Maches1:any[] = [];
  code:any;
  league:any;
  home:any;
  away:any;
  

  Mach: any[]  =[];
  constructor(data :DataService) {
  this.Data = data.getData();
  this.fillData();

 var some = data.getMach(9004);
 this.Mach.push(some);
   }

   fillData(){
   for (let mach in this.Data){
    this.Maches1.push({code: this.Data[mach]["code"], league:this.Data[mach]["league"], home: this.Data[mach]["home"], away: this.Data[mach]["away"]})
   }
  }


  ngOnInit() {
  }

}
