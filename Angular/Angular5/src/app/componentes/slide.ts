import { Component } from '@angular/core';
import {SlideServicio} from "../servicios/slide.servicio";

@Component({

  selector:"slide",
  templateUrl:"../vistas/slide.html",
  providers:[SlideServicio]


})
export class SlideComponente{
  public slideJson;

  constructor(private _SlideServicio:SlideServicio){

    //console.log(this._SlideServicio.prueba());
      this._SlideServicio.tomarJsonSlide().subscribe(resltado => {

        this.slideJson=resltado;
        console.log("this.slideJson",this.slideJson[0]["imagen"]);
      },
        error =>{
          var mensajeError=<any>error;
        }

        );
  }
}
