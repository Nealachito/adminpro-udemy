import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importacion de componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Importacion de Rutas
import { APP_ROUTES } from './app.routes';

// Importacion de Modulos
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
