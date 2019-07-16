import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() porcentaje: number = 50 ;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output() CmbValor:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  incrementar(){
    if(this.porcentaje>=100){
      return;
    }
    this.porcentaje = this.porcentaje + 5;
    this.CmbValor.emit(this.porcentaje);
  }
  decrementar(){
    if(this.porcentaje<=0){
      return;
    }
    this.porcentaje -= 5;
    this.CmbValor.emit(this.porcentaje);
  }
}
