import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable,interval, Subscription, timer  } from 'rxjs';
import { Imatch } from '../matchesInt';

@Component({
  selector: 'app-maches',
  templateUrl: './maches.component.html',
  styleUrls: ['./maches.component.css']
})
export class MachesComponent implements OnInit {
  Maches1:any[] = [];
  code:any;
  league:any;
  home:any;
  away:any;
  minut :string;
  homescore:any;
  awayscore:any;
  dict: {};
  src = 0;
 
  timerRefresingData=setInterval(() => { this.fillData(); }, 10000);
  timerGetingData = setInterval(() => { this.getData(); }, 90000);


minute:number;
  LogData(){
    console.log(this.listOfMatches)
    this.fillData();
  }
listOfMatches:Observable<Imatch>[]
setTimerForGetAllMatches(){
  setTimeout(() => {
    this.fillData();;
  }, 400);
}
  Mach: any[]  =[];


  constructor( private data :DataService)
   {
    this.getData(); 
    this.timerRefresingData;    

   }


   fillData(){
     this. Maches1 = []
   for (let mach in this.listOfMatches){
     this.dict = this.listOfMatches[mach]["history"]
     this.minut = Object.keys(this.dict)[Object.keys(this.dict).length-1]
     this.minute =  parseInt(this.minut);
     var last = this.dict[Object.keys(this.dict)[Object.keys(this.dict).length - 1]]
    
    this.Maches1.push({code: this.listOfMatches[mach]["code"], league:this.listOfMatches[mach]["league"], home: this.listOfMatches[mach]["home"], away: this.listOfMatches[mach]["away"],minut :this.minute, reshome: last["res_home"],resaway: last["res_away"], res:this.src})
   }
   this.src = this.src + 1;
   console.log("refresing");
   console.log(this.src);
  }
  getData(){
    this.listOfMatches = [];
    this.data.tryGEt().subscribe(
      response =>
      {
        this.listOfMatches = response;
      }
    )
  }
 


  ngOnInit() {
    this.fillData();
    this.setTimerForGetAllMatches();
    this.timerRefresingData
    

    
    
  }
  

}
