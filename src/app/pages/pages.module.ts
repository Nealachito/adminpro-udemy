import { NgModule } from "@angular/core";

// Importacion de Componentes

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

// Importacion de Modulos
import { SharedModule } from '../shared/shared.module';

// Importacion rutas Hijas
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
  ],
  imports:[
    SharedModule,
    PAGES_ROUTES
  ],
  providers:[]
})
export class PagesModule { }
