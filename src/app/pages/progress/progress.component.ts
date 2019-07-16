import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  prog1:number = 50;
  prog2:number = 40;

  constructor() { }

  ngOnInit() {
  }
  actualizar(){}

}
