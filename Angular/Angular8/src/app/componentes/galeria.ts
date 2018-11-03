import { Component,OnInit } from '@angular/core';
import {GaleriaServicio} from "../servicios/galeria.servicio";
import {SlideServicio} from "../servicios/slide.servicio";

@Component({

  selector:"galeria",
  templateUrl:"../vistas/galeria.html",
  providers:[GaleriaServicio]


})
export class GaleriaComponente implements OnInit{
  public galeriaJson;
  public identificado:string;

  constructor(private _GaleriaServicio:GaleriaServicio){

    //console.log(this._SlideServicio.prueba());
    this._GaleriaServicio.tomarJsonGaleria().subscribe(resltado => {

        this.galeriaJson=resltado;
      },
      error =>{
        var mensajeError=<any>error;
      }

    );
  }
  ngOnInit(){

    this.identificado=localStorage.getItem("id")
    setTimeout(()=>{

      var pg = {
        imgGaleria: document.querySelectorAll("#galeria ul li img"),
        rutaImagen: null,
        cuerpoDom: document.querySelector("body"),
        lightbox: null,
        modal: null,
        animacionGaleria: "fade"
      }
      var mg = {
        inicioGaleria: function() {
          for (var i = 0; i < pg.imgGaleria.length; i++) {
            pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)
          }
        },
        capturaImagen: function(img) {
          pg.rutaImagen = img.target;
          mg.lightbox(pg.rutaImagen)
        },
        lightbox: function(img) {
          pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
          pg.lightbox = document.querySelector("#lightbox");
          pg.lightbox.style.width = "100%";
          pg.lightbox.style.height = "100%";
          pg.lightbox.style.position = "fixed";
          pg.lightbox.style.zIndex = "10";
          pg.lightbox.style.background = "rgba(0,0,0,.8)";
          pg.lightbox.style.top = 0;
          pg.lightbox.style.lefts = 0;
          pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
          pg.modal = document.querySelector("#modal");
          pg.modal.innerHTML = img.outerHTML + "<div>x</div>";
          pg.modal.style.display = "block";
          pg.modal.style.position = "relative";
          pg.modal.childNodes[0].style.width = "100%";
          pg.modal.childNodes[0].style.border = "15px solid white";
          if (window.matchMedia("(max-width:1000px)").matches) {
            pg.modal.style.width = "90%";
          } else {
            pg.modal.style.width = "60%";
          }
          if (pg.animacionGaleria == "slideLeft") {
            pg.modal.style.top = "50%";
            pg.modal.style.left = 0;
            pg.modal.style.opacity = 0;
            setTimeout(function() {
              pg.modal.style.transition = ".5s left ease";
              pg.modal.style.left = "50%";
              pg.modal.style.opacity = 1;
              pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
              pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
          }
          if (pg.animacionGaleria == "slideTop") {
            pg.modal.style.top = "-100%";
            pg.modal.style.left = "50%";
            pg.modal.style.opacity = 0;
            setTimeout(function() {
              pg.modal.style.transition = ".5s top ease";
              pg.modal.style.top = "50%";
              pg.modal.style.opacity = 1;
              pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
              pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
          }
          if (pg.animacionGaleria == "fade") {
            pg.modal.style.top = "50%";
            pg.modal.style.left = "50%";
            pg.modal.style.opacity = 0;
            setTimeout(function() {
              pg.modal.style.transition = ".5s opacity ease";
              pg.modal.style.opacity = 1;
              pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
              pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
          }
          pg.modal.childNodes[1].style.position = "absolute";
          pg.modal.childNodes[1].style.right = "5px";
          pg.modal.childNodes[1].style.top = "5px";
          pg.modal.childNodes[1].style.color = "silver";
          pg.modal.childNodes[1].style.cursor = "pointer";
          pg.modal.childNodes[1].style.fontSize = "30px";
          pg.modal.childNodes[1].style.width = "40px";
          pg.modal.childNodes[1].style.height = "40px";
          pg.modal.childNodes[1].style.textAlign = "center";
          pg.modal.childNodes[1].style.background = "white";
          pg.modal.childNodes[1].style.borderRadius = "0px 0px 0px 5px";
          pg.modal.childNodes[1].addEventListener("click", mg.salirGaleria)
        },
        salirGaleria: function() {
          pg.lightbox.parentNode.removeChild(pg.lightbox);
        }
      };
      mg.inicioGaleria();

    },1000);


  }

}
