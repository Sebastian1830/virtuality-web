import { Component, OnInit } from '@angular/core';
import { countries } from '../../../data/example-chart-line';

@Component({
  selector: 'content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit {
  countries: any[] = [];
  view: [number, number] = [700, 300];

  // opciones
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Año';
  yAxisLabel: string = 'Poblacion';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { countries });
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
}
