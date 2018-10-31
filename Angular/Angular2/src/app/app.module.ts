import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {SlideComponente} from './componentes/slide';
import {IndexComponente} from './componentes/index';
import {GaleriaComponente} from './componentes/galeria';
import {ScrollComponente} from './componentes/scroll';
import {FormularioComponente} from './componentes/formulario';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponente,
    FormularioComponente,
    IndexComponente,
    SlideComponente,
    GaleriaComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
