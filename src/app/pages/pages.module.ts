import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';


// Importacion de Componentes

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../componentes/incrementador/incrementador.component';
import { GraficaDonComponent } from '../componentes/grafica-don/grafica-don.component';

// Importacion de Modulos
import { SharedModule } from '../shared/shared.module';

// Importacion rutas Hijas
import { PAGES_ROUTES } from './pages.routes';

// Importacion de libreria Charts
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficaDonComponent
  ],
  exports:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
  ],
  imports:[
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  providers:[]
})
export class PagesModule { }
