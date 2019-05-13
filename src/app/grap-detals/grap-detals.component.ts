import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grap-detals',
  templateUrl: './grap-detals.component.html',
  styleUrls: ['./grap-detals.component.css']
})
export class GrapDetalsComponent implements OnInit {
  SAMPLE_BARCHART_LABELSTr: string[] = [];

away;
home;

  dataForLabelsTr:any[] = [];
  SAMPLE_BARCHART_DATAtr =[
    {
    data:[],
    label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    },
    
  ]
  SAMPLE_BARCHART_LABELSSec: string[] = [];

  SAMPLE_BARCHART_DATASec =[
    {
    data:[],
    label: ''
    },
    {
      data:[],
      label: ''
    },
    {
      data:[],
      label: ''
    }
  ]

  SAMPLE_BARCHART_LABELSFrist: string[] = [];
    dataForLabels:any[];
    SAMPLE_BARCHART_DATAFrist =[
      {
      data:[],
      label: ''
      },
      {
        data:[],
        label: ''
      },
      {
        data:[],
        label: ''
      }
    ]
  dataForGraph= {};
  public barChartDataFrist: any[] = this.SAMPLE_BARCHART_DATAFrist;
  public barChartLabelsFrist: string[]= this.SAMPLE_BARCHART_LABELSFrist;
  public barChartDataSec: any[] = this.SAMPLE_BARCHART_DATASec;
  public barChartLabelsSec: string[]= this.SAMPLE_BARCHART_LABELSSec;
  public barChartDataTr: any[] = this.SAMPLE_BARCHART_DATAtr;
  public barChartLabelsTr: string[]= this.SAMPLE_BARCHART_LABELSTr;
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

num: number;
  
  Mach: any[] = [];
  constructor(private data: DataService,private route: ActivatedRoute ) { 
    this.route.params.subscribe( params => this.num = params.code); 
    var some = this.data.getMach(this.num);
    this.Mach.push(some);
    console.log(this.Mach); 
    this.filBarChartData();  
 }

 
   
    
   
 
 filBarChartData(){
    this.home = this.Mach[0]['home'];
    this.away = this.Mach[0]['away'];
  for (let key in this.Mach[0]['history']) {
    let value = this.Mach[0]['history'][key];
    this.SAMPLE_BARCHART_LABELSFrist.push(key);
    this.SAMPLE_BARCHART_LABELSSec.push(key);
    this.SAMPLE_BARCHART_LABELSTr.push(key);
      this.SAMPLE_BARCHART_DATAtr[0].data.push(value['res_home']);
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
   
  }

}
