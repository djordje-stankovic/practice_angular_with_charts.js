import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { GrapDetalsComponent } from '../grap-detals/grap-detals.component';
import { type } from 'os';
import { MachesComponent } from '../maches/maches.component';

@Component({
  selector: 'app-big-grap',
  templateUrl: './big-grap.component.html',
  styleUrls: ['./big-grap.component.css']
})
export class BigGrapComponent implements OnInit {
  @Input('user') mach  : MachesComponent;
  SAMPLE_BARCHART_LABELS: string[] = [];

  dataForLabels:any[] = [];
  SAMPLE_BARCHART_DATA =[
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
dataForGraph:{};

  filBarChartData(){
    for (let key in this.dataForGraph['history']) {
      let value = this.dataForGraph['history'][key];
      console.log(key);
      this.SAMPLE_BARCHART_LABELS.push(key);
      this.SAMPLE_BARCHART_DATA[0].data.push(value['res_home']);
      this.SAMPLE_BARCHART_DATA[1].data.push(value['res_away']);
      this.SAMPLE_BARCHART_DATA[2].data.push(value['odd_tg_less']);
      this.SAMPLE_BARCHART_DATA[3].data.push(value['odd_tg_more']);
      this.SAMPLE_BARCHART_DATA[4].data.push(value['odd_tg']);
      this.SAMPLE_BARCHART_DATA[5].data.push(value['odd_hg_less']);
      this.SAMPLE_BARCHART_DATA[6].data.push(value['odd_hg_more']);
      this.SAMPLE_BARCHART_DATA[7].data.push(value['odd_hg']);
      this.SAMPLE_BARCHART_DATA[8].data.push(value['odd_ag_less']);
      this.SAMPLE_BARCHART_DATA[9].data.push(value['odd_ag_more']);
      this.SAMPLE_BARCHART_DATA[10].data.push(value['odd_ag']);
    }
    this.SAMPLE_BARCHART_DATA[0].label = 'res_home';
    this.SAMPLE_BARCHART_DATA[1].label = 'res_away';
    this.SAMPLE_BARCHART_DATA[2].label = 'odd_tg_less';
    this.SAMPLE_BARCHART_DATA[3].label = 'odd_tg_more';
    this.SAMPLE_BARCHART_DATA[4].label = 'odd_tg';
    this.SAMPLE_BARCHART_DATA[5].label = 'odd_hg_less';
    this.SAMPLE_BARCHART_DATA[6].label = 'odd_hg_more';
    this.SAMPLE_BARCHART_DATA[7].label = 'odd_hg';
    this.SAMPLE_BARCHART_DATA[8].label = 'odd_ag_less';
    this.SAMPLE_BARCHART_DATA[9].label = 'odd_ag_more';
    this.SAMPLE_BARCHART_DATA[10].label = 'odd_ag';
    
  }

  constructor() { 


    //this.filBarChartData();
   }

  orders: any;
  orderLabels: string[];
  orderData: number[];

  public barChartData: any[] = this.SAMPLE_BARCHART_DATA;
  public barChartLabels: string[]=this.SAMPLE_BARCHART_LABELS;
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
