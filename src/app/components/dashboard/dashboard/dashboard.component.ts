import { Component, OnInit } from '@angular/core';
import { countries } from '../../../data/example-chart-line';
import { bubbleData } from '../../../data/example-chart-bubble';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  countries: any[] = [];
  bubbleData: any[] = [];
  view: [number, number] = [700, 320];

  // opciones charts
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Año';
  yAxisLabel: string = 'Poblacion';

  // opciones chart-line
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;

  // options chart-bubble
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;
  xScaleMin!: number;
  xScaleMax!: number;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { countries });
    Object.assign(this, { bubbleData });
    this.view = [innerWidth / 1.9, 320];
  }

  ngOnInit(): void {
  }
  
  onSelect(data: any) {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any) {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any) {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.9, 320];
  }
}
