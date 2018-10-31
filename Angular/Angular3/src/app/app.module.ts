import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import {routing,appRoutingProviders} from "./app-routing.module";
import {SlideComponente} from './componentes/slide';
import {IndexComponente} from './componentes/index';
import {GaleriaComponente} from './componentes/galeria';
import {ScrollComponente} from './componentes/scroll';
import {FormularioComponente} from './componentes/formulario';
import {ApiComponente} from './componentes/api';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponente,
    FormularioComponente,
    IndexComponente,
    SlideComponente,
    GaleriaComponente,
    ApiComponente
  ],
  imports: [
    BrowserModule,
    //routing
   AppRoutingModule
  ],
  //providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
