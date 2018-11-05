import {Component, OnInit} from '@angular/core';
import {ListaUsuarios} from "../modelos/usuarios.modelo"
import {ItemSlides} from "../modelos/slides.modelo"
import {ServicioUsuarios} from "../servicios/usuarios.servicio";
import {ServicioSlide} from "../servicios/slide.servicio";
import{Ruta} from "../ruta_global";

@Component({

  selector: "tag-api",
  templateUrl: "../vistas/api.html",
  providers: [ServicioUsuarios,ServicioSlide]

})
export class ApiComponente {

  public identificado;
  public usuario;
  public listaUsuarios: ListaUsuarios;
  public itemSlides: ItemSlides;
  public validarIngreso: boolean = false;
  public mensaje;
//public subirImagen= Array<File>;
  public subirImagen: Array<File>;
  public url:string;

  constructor(private _servicioUsuarios: ServicioUsuarios,private _servicioSlide:ServicioSlide) {
    this.listaUsuarios = new ListaUsuarios("", "");
    this.url=Ruta.url;
    this.itemSlides = new ItemSlides("", "", "");
  }

  ngOnInit() {

    this.identificado = localStorage.getItem("id");
    this.usuario = localStorage.getItem("usuario");
  }

  enviar() {
    this._servicioUsuarios.login(this.listaUsuarios, "true").subscribe(
      resultado => {
        this.identificado = resultado.token;
        this.usuario = resultado.seleccionUsuario.usuario;
        localStorage.setItem("id", this.identificado);
        localStorage.setItem("usuario", this.usuario);

      },
      error => {
        this.validarIngreso = true;
        var errorMensaje = JSON.parse(error._body);
        this.mensaje = errorMensaje.mensaje;
      }
    )
  }

  cerrarSesion() {
    localStorage.removeItem("id");
    localStorage.removeItem("usuario");
    localStorage.clear();
    this.identificado = null;
    this.usuario = null;
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

  nuevoSlide() {
    this._servicioSlide.subirImagenSlide(this.url+"crear-slide",this.itemSlides,this.identificado,this.subirImagen).then(
      (resultado)=>{
        window.location.reload();
    },(error)=>{
        this.validarIngreso=true;
        this.mensaje="No se pudo subir el slide"
      });
  }
}
