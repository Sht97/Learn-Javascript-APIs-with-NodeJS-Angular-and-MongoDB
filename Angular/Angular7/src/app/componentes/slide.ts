import { Component ,OnInit} from '@angular/core';
import {SlideServicio} from "../servicios/slide.servicio";

@Component({

  selector:"slide",
  templateUrl:"../vistas/slide.html",
  providers:[SlideServicio]


})
export class SlideComponente implements OnInit{
  public slideJson;
  public identificado:string="ok";

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
  ngOnInit(){
    setTimeout(()=>{
      var p = {
        paginacion: document.querySelectorAll("#paginacion li"),
        item: 0,
        cajaSlide: document.querySelectorAll("#slide ul"),
        animacionSilde: "slide",
        imgSlide: document.querySelectorAll("#slide ul li"),
        retroceder: document.querySelector("#slide #retroceder"),
        avanzar: document.querySelector("#slide #avanzar"),

        velocidadSlide: 3000,
        formatearLoop: false};

      var m = {
        inicioSlide: function() {
          console.log(p.paginacion);
          for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            p.imgSlide[""+i].style.width = (100 / p.paginacion.length) + "%";
          }

          p.retroceder.addEventListener("click", m.retroceder);
          p.avanzar.addEventListener("click", m.avanzar);
          m.intervalo();
          p.cajaSlide["0"].style.width = (p.paginacion.length * 100) + "%";
        },
        paginacionSlide: function(item) {
          p.item = item.target.parentNode.getAttribute("value") - 1;
          m.movimientoSlide(p.item);
        },
        avanzar: function() {
          if (p.item == p.imgSlide.length - 1) {
            p.item = 0;
          } else {
            p.item++;
          }
          m.movimientoSlide(p.item);
        },
        retroceder: function() {
          if (p.item == 0) {
            p.item = p.imgSlide.length - 1;
          } else {
            p.item--;
          }
          m.movimientoSlide(p.item);
        },
        movimientoSlide: function(item) {
          p.formatearLoop = true;
          p.cajaSlide["0"].style.left = item * -100 + "%";
          for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[""+i].style.opacity = .5;
          }
          p.paginacion[""+item].style.opacity = 1;
          if (p.animacionSilde == "slide") {
            p.cajaSlide["0"].style.transition = ".7s left ease-in-out";
          }
          if (p.animacionSilde == "fade") {
            p.imgSlide[""+item].style.opacity = 0;
            p.imgSlide[""+item].style.transition = ".7s opacity ease-in-out";
            setTimeout(function() {
              p.imgSlide[""+item].style.opacity = 1;
            }, 500)
          }
        },
        intervalo: function() {
          setInterval(function() {
            if (p.formatearLoop) {
              p.formatearLoop = false;
            } else {
              m.avanzar();
            }
          }, p.velocidadSlide)
        }
      };
      m.inicioSlide();
    },1000);
  }
}
