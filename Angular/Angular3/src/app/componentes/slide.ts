import { Component } from '@angular/core';
import {SlideServicio} from "../servicios/slide.servicio";

@Component({

  selector:"slide",
  templateUrl:"../vistas/slide.html",
  providers:[SlideServicio]


})
export class SlideComponente{
  constructor(private _SlideServicio:SlideServicio){
    console.log(this._SlideServicio.prueba());
      }
}
