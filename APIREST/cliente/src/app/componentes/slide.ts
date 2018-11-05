import {Component, OnInit} from '@angular/core';
import {ServicioSlide} from "../servicios/slide.servicio";
import {Ruta} from "../ruta_global";
import {ItemSlides} from "../modelos/slides.modelo";
import {error} from "selenium-webdriver";

@Component({

  selector: "slide",
  templateUrl: "../vistas/slide.html",
  providers: [ServicioSlide]


})
export class SlideComponente implements OnInit {
  public slideJson;
  public identificado;
  public url: string;
  public itemSlides: ItemSlides;
  public idSlide;
  public formEditarSlide: boolean = false;
  public cambiarImagen: boolean = false;
  public subirImagen: Array<File>;
  public mensaje;
  public validarIngreso: boolean = false;

  constructor(private _ServicioSlide: ServicioSlide) {


    //console.log(this._SlideServicio.prueba());
    this._ServicioSlide.tomarJsonSlide().subscribe(resltado => {

        this.slideJson = resltado.mostrandoSlides;
        this.url = Ruta.url;
      },
      error => {
        var mensajeError = <any>error;
      }
    );
  }

  ngOnInit() {
    this.identificado = localStorage.getItem("id")
    setTimeout(() => {
      var p = {
        paginacion: document.querySelectorAll("#paginacion li"),
        item: 0,
        cajaSlide: document.querySelectorAll("#slide ul"),
        animacionSilde: "slide",
        imgSlide: document.querySelectorAll("#slide ul li"),
        retroceder: document.querySelector("#slide #retroceder"),
        avanzar: document.querySelector("#slide #avanzar"),

        velocidadSlide: 3000,
        formatearLoop: false
      };

      var m = {
        inicioSlide: function () {
          for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            p.imgSlide["" + i].style.width = (100 / p.paginacion.length) + "%";
          }

          p.retroceder.addEventListener("click", m.retroceder);
          p.avanzar.addEventListener("click", m.avanzar);
          m.intervalo();
          p.cajaSlide["0"].style.width = (p.paginacion.length * 100) + "%";
        },
        paginacionSlide: function (item) {
          p.item = item.target.parentNode.getAttribute("value") - 1;
          m.movimientoSlide(p.item);
        },
        avanzar: function () {
          if (p.item == p.imgSlide.length - 1) {
            p.item = 0;
          } else {
            p.item++;
          }
          m.movimientoSlide(p.item);
        },
        retroceder: function () {
          if (p.item == 0) {
            p.item = p.imgSlide.length - 1;
          } else {
            p.item--;
          }
          m.movimientoSlide(p.item);
        },
        movimientoSlide: function (item) {
          p.formatearLoop = true;
          p.cajaSlide["0"].style.left = item * -100 + "%";
          for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion["" + i].style.opacity = .5;
          }
          p.paginacion["" + item].style.opacity = 1;
          if (p.animacionSilde == "slide") {
            p.cajaSlide["0"].style.transition = ".7s left ease-in-out";
          }
          if (p.animacionSilde == "fade") {
            p.imgSlide["" + item].style.opacity = 0;
            p.imgSlide["" + item].style.transition = ".7s opacity ease-in-out";
            setTimeout(function () {
              p.imgSlide["" + item].style.opacity = 1;
            }, 500)
          }
        },
        intervalo: function () {
          setInterval(function () {
            if (p.formatearLoop) {
              p.formatearLoop = false;
            } else {
              m.avanzar();
            }
          }, p.velocidadSlide)
        }
      };
      m.inicioSlide();
    }, 2000);
  }

  editarSlide(slide) {
    this.idSlide = slide._id;
    this.itemSlides = new ItemSlides(slide.imagen, slide.titulo, slide.descripcion);
    this.formEditarSlide = true;
  }

  cargarFichero(fileInput: any) {
    this.subirImagen = <Array<File>>fileInput.target.files;
    if (this.subirImagen[0].size < 2000000 && this.subirImagen[0].type == "image/jpeg" || this.subirImagen[0].type == "image/png") {
      this.validarIngreso = false;
      return this.subirImagen;
    } else {
      this.validarIngreso = true;
      this.mensaje = "La extension o el peso del archivo no es válido";
      this.subirImagen = null;
      return this.subirImagen;

    }
  }

  actualizarSlide() {
    this._ServicioSlide.actualizarItemSlide(this.url+ "actualizar-slide/" + this.idSlide, this.itemSlides, this.identificado, this.subirImagen).then(
      (resultado) => {

      window.location.reload()
      }, (error) => {

      }
    )
  }
  borrarSlide(slide){
    let id=slide._id;
    this._ServicioSlide.borrarItemSlide(id).subscribe(
      resultado=>{
        window.location.reload();
      },error=>{
        console.log("error",error);
      }
    )
  }

}
