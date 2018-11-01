import { Component } from '@angular/core';
import {GaleriaServicio} from "../servicios/galeria.servicio";

@Component({

  selector:"galeria",
  templateUrl:"../vistas/galeria.html",
  providers:[GaleriaServicio]


})
export class GaleriaComponente{
  constructor(private  _GaleriaServicio:GaleriaServicio){

    console.log(this._GaleriaServicio.prueba());
  }

}
