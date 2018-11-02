import { Component } from '@angular/core';
import {GaleriaServicio} from "../servicios/galeria.servicio";
import {SlideServicio} from "../servicios/slide.servicio";

@Component({

  selector:"galeria",
  templateUrl:"../vistas/galeria.html",
  providers:[GaleriaServicio]


})
export class GaleriaComponente{
  public galeriaJson;
  constructor(private _GaleriaServicio:GaleriaServicio){

    //console.log(this._SlideServicio.prueba());
    this._GaleriaServicio.tomarJsonGaleria().subscribe(resltado => {

        this.galeriaJson=resltado;
        console.log("this.galeriaJson",this.galeriaJson);
      },
      error =>{
        var mensajeError=<any>error;
      }

    );
  }


}
