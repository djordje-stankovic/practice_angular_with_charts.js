import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Imatch } from '../matchesInt';
import { timeout } from 'q';


@Component({
  selector: 'app-grap-detals',
  templateUrl: './grap-detals.component.html',
  styleUrls: ['./grap-detals.component.css']
})

export class GrapDetalsComponent implements OnInit {
 

away;
home;
minut;

  SAMPLE_BARCHART_LABELSTr: string[] = [];
  dataForLabelsTr:any[] = [];
  SAMPLE_BARCHART_DATAtr =[
    {
    fill: false,
    data:[],
    label: '',
    lineTension: 0,
    radius: 1,
    pointRadius: 1, 
    },
    {
    fill: false,
      data:[],
      label: '',
      lineTension: 0, 
      radius: 1,
    pointRadius: 1,
    },
    {
      data:[],
      label: '',
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    },
    {
      data:[],
      lineTension: 0, 
      radius: 1,
    pointRadius: 1,
    fill: false,
      label: ''
    },
    {
      data:[],
      fill: false,
      lineTension: 0, 
      radius: 1,
    pointRadius: 1,
      label: ''
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    },
    
  ]
  SAMPLE_BARCHART_LABELSSec: string[] = [];

  SAMPLE_BARCHART_DATASec =[
    {
    data:[],
    fill: false,
    label: '',
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
    },
    {
      data:[],
      lineTension: 0, 
    fill: false,
    radius: 1,
    pointRadius: 1,
      label: ''
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    }
  ]

  SAMPLE_BARCHART_LABELSFrist: string[] = [];
    dataForLabels:any[];
    SAMPLE_BARCHART_DATAFrist =[
      {
      data:[],
      radius: 1,
    pointRadius: 1,
    fill: false,
    lineTension: 0, 

      label: ''
      },
      {
        data:[],
        radius: 1,
    pointRadius: 1,
    fill: false,
    lineTension: 0, 
        label: ''
      },
      {
        data:[],
        radius: 1,
    pointRadius: 1,
      fill: false,
    lineTension: 0, 

        label: ''
      }
    ]
  dataForGraph= {};
  listOfMatches:Imatch[];
  public barChartDataFrist: any[] = this.SAMPLE_BARCHART_DATAFrist;
  public barChartLabelsFrist: string[]= this.SAMPLE_BARCHART_LABELSFrist;
  public barChartDataSec: any[] = this.SAMPLE_BARCHART_DATASec;
  public barChartLabelsSec: string[]= this.SAMPLE_BARCHART_LABELSSec;
  public barChartDataTr: any[] = this.SAMPLE_BARCHART_DATAtr;
  public barChartLabelsTr: string[]= this.SAMPLE_BARCHART_LABELSTr;
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    bezierCurve: false,
    tension: 0,
    elements: { point: { hitRadius: 10, hoverRadius: 10 } } 
  };
  
  timerRefresingGrap = setInterval(() => { this.filBarChartData(); }, 50000);
  timerGetingData = setInterval(() => { this.getData(); }, 90000);
  timerRefreshingMatch = setInterval(() => { this.getOneMatch(this.num); }, 1000);

  num: number;
  Mach:any;
  constructor(private data: DataService,private route: ActivatedRoute ) {
    
    
    this.route.params.subscribe( params => this.num = params.code);
    this.getData(); 
    this.setTimerForGetMatch();
    this.setTimerForGrapFill();
     
 }
getOneMatch(num){
    return this.listOfMatches[num];
}
setTimerForGrapFill(){
  setTimeout(() => {
    this.filBarChartData();
  }, 500);
}
setTimerForGetMatch(){
  setTimeout(() => {
    this.Mach = this.getOneMatch(this.num);
  }, 3500);
}

 getData(){
  this.listOfMatches = [];
  this.data.tryGEt().subscribe(
    respones =>
    {
      this.listOfMatches = respones;
    }
  )
  console.log(this.num);
 }
 setTimerForRefreshGraph(){
  setTimeout(() => {
    this.Mach = this.emptyAll();
  }, 500);
  
 
}
setTimerForMakeGraph(){
  setTimeout(() => {
    this.Mach = this.makeGraph();
  }, 500);
}

 
   minute:number;
   dict =  {}; 
 
 filBarChartData(){
  this.emptyAll()
  console.log(this.SAMPLE_BARCHART_LABELSTr);
  console.log(this.SAMPLE_BARCHART_DATAtr);
  console.log(this.SAMPLE_BARCHART_DATAFrist);
  this.Mach = this.getOneMatch(this.num); 
  this.makeGraph();
  
    
  
 }

 makeGraph(){
  
  this.dict = this.Mach["history"]
  console.log(this.dict);
  this.minut =Object.keys(this.dict)[Object.keys(this.dict).length-1]
  this.minute =  parseInt(this.minut);
    this.home = this.Mach['home'];
    this.away = this.Mach['away'];
    for (let key in this.Mach['history']) {
    let value = this.Mach['history'][key];
    this.SAMPLE_BARCHART_LABELSFrist.push(key);
    this.SAMPLE_BARCHART_LABELSSec.push(key);
    this.SAMPLE_BARCHART_LABELSTr.push(key);
      this.SAMPLE_BARCHART_DATAtr[0].data.push(value['res_home']);
      console.log(value['res_home']);

      this.SAMPLE_BARCHART_DATAtr[1].data.push(value['res_away']);
      this.SAMPLE_BARCHART_DATAtr[2].data.push(value['odd_tg_less']);
      this.SAMPLE_BARCHART_DATAtr[3].data.push(value['odd_tg_more']);
      this.SAMPLE_BARCHART_DATAtr[4].data.push(value['odd_tg']);
      this.SAMPLE_BARCHART_DATAtr[5].data.push(value['odd_hg_less']);
      this.SAMPLE_BARCHART_DATAtr[6].data.push(value['odd_hg_more']);
      this.SAMPLE_BARCHART_DATAtr[7].data.push(value['odd_hg']);
      this.SAMPLE_BARCHART_DATAtr[8].data.push(value['odd_ag_less']);
      this.SAMPLE_BARCHART_DATAtr[9].data.push(value['odd_ag_more']);
      this.SAMPLE_BARCHART_DATAtr[10].data.push(value['odd_ag']);
    this.SAMPLE_BARCHART_DATAFrist[0].data.push(value['odd_1']);
    this.SAMPLE_BARCHART_DATAFrist[1].data.push(value['odd_x']);
    this.SAMPLE_BARCHART_DATAFrist[2].data.push(value['odd_2']);
    this.SAMPLE_BARCHART_DATASec[0].data.push(value['ng_1']);
    this.SAMPLE_BARCHART_DATASec[1].data.push(value['ng_x']);
    this.SAMPLE_BARCHART_DATASec[2].data.push(value['ng_2']);
  }
  this.SAMPLE_BARCHART_DATAFrist[0].label = 'odd_1';
  this.SAMPLE_BARCHART_DATAFrist[1].label = 'odd_x';
  this.SAMPLE_BARCHART_DATAFrist[2].label = 'odd_2';
  this.SAMPLE_BARCHART_DATASec[0].label = 'ng_1';
  this.SAMPLE_BARCHART_DATASec[1].label = 'ng_x';
  this.SAMPLE_BARCHART_DATASec[2].label = 'ng_2';
  this.SAMPLE_BARCHART_DATAtr[0].label = 'res_home';
    this.SAMPLE_BARCHART_DATAtr[1].label = 'res_away';
    this.SAMPLE_BARCHART_DATAtr[2].label = 'odd_tg_less';
    this.SAMPLE_BARCHART_DATAtr[3].label = 'odd_tg_more';
    this.SAMPLE_BARCHART_DATAtr[4].label = 'odd_tg';
    this.SAMPLE_BARCHART_DATAtr[5].label = 'odd_hg_less';
    this.SAMPLE_BARCHART_DATAtr[6].label = 'odd_hg_more';
    this.SAMPLE_BARCHART_DATAtr[7].label = 'odd_hg';
    this.SAMPLE_BARCHART_DATAtr[8].label = 'odd_ag_less';
    this.SAMPLE_BARCHART_DATAtr[9].label = 'odd_ag_more';
    this.SAMPLE_BARCHART_DATAtr[10].label = 'odd_ag';
 }

  ngOnInit() {
   this.getData();
  }
emptyAll(){
  this.SAMPLE_BARCHART_LABELSTr = [];
  this.SAMPLE_BARCHART_DATAtr =[
    {
    fill: false,
    radius: 1,
    pointRadius: 1,
    lineTension: 0, 

    data:[],
    label: ''
    },
    {
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      data:[],
      label: ''
    },
    {
      data:[],
      radius: 1,
    pointRadius: 1,
    lineTension: 0, 

      label: '',
    fill: false,
    },
    {
      data:[],
      radius: 1,
    pointRadius: 1,
    fill: false,
    lineTension: 0, 

      label: ''
    },
    {
      data:[],
      radius: 1,
    pointRadius: 1,
    fill: false,
    lineTension: 0, 

      label: ''
    },
    {
      data:[],
      radius: 1,
    pointRadius: 1,
    lineTension: 0, 

    fill: false,
      label: ''
    },
    {
      data:[],
      radius: 1,
    pointRadius: 1,
    fill: false,
    lineTension: 0, 

      label: ''
    },
    {
      data:[],
      radius: 1,
    pointRadius: 1,
    fill: false,
    lineTension: 0, 

      label: ''
    },
    {
      data:[],
    fill: false,
    radius: 1,
    pointRadius: 1,
    lineTension: 0, 

      label: ''
    },
    {
      data:[],
      fill: false,
      radius: 1,
    pointRadius: 1,
    lineTension: 0, 

      label: ''
    },
    {
      data:[],
    fill: false,
    radius: 1,
    pointRadius: 1,
    lineTension: 0, 

      label: ''
    },
    
  ]
  this.SAMPLE_BARCHART_LABELSSec  = [];
  this.SAMPLE_BARCHART_DATASec =[
    {
    data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
    label: ''
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    },
    {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
    }
  ]
    this.SAMPLE_BARCHART_LABELSFrist = [];
    this.SAMPLE_BARCHART_DATAFrist =[
      {
      data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
      label: ''
      },
      {
        data:[],
    fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
        label: ''
      },
      {
        data:[],
      fill: false,
    lineTension: 0, 
    radius: 1,
    pointRadius: 1,
        label: ''
      }
    ]
  this.barChartDataFrist = this.SAMPLE_BARCHART_DATAFrist;
  this.barChartLabelsFrist = this.SAMPLE_BARCHART_LABELSFrist;
  this.barChartDataSec= this.SAMPLE_BARCHART_DATASec;
  this.barChartLabelsSec= this.SAMPLE_BARCHART_LABELSSec;
  this.barChartDataTr = this.SAMPLE_BARCHART_DATAtr;
  this.barChartLabelsTr = this.SAMPLE_BARCHART_LABELSTr;
}
}

