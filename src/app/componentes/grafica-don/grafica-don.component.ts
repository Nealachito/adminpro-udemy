import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-don',
  templateUrl: './grafica-don.component.html',
  styles: []
})
export class GraficaDonComponent implements OnInit {
  @Input() doughnutChartLabels: string[] = [] ;
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
