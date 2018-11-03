import { Component ,OnInit} from '@angular/core';
import {ListaUsuarios} from "../modelos/usuarios.modelo"
import {ServicioUsuarios} from "../servicios/usuarios.servicio";

@Component({

  selector:"tag-api",
  templateUrl:"../vistas/api.html",
  providers:[ServicioUsuarios]

})
export class ApiComponente{

  public identificado;
  public usuario;
  public listaUsuarios:ListaUsuarios;
  public validarIngreso:boolean=false;
  constructor(private _servicioUsuarios:ServicioUsuarios)
  {
    this.listaUsuarios=new ListaUsuarios("","")
  }
  ngOnInit(){

    this.identificado=localStorage.getItem("id");
    this.usuario=localStorage.getItem("usuario");
  }
  enviar(){
    this._servicioUsuarios.login().subscribe(
      resultado=>{
        console.log(resultado);

        for(var i in resultado){
          if(resultado[i].usuario ==this.listaUsuarios.usuario &&
            resultado[i].password ==this.listaUsuarios.password){
            this.identificado=resultado[i].id;
            localStorage.setItem("id",this.identificado)
            localStorage.setItem("usuario",resultado[i].usuario)
          }else {
            this.validarIngreso=true;
          }

        }
      },
      error =>{
        var errorMensaje=<any>error;
        console.log("ErrorMensaje",error)
      }
    )
  }
  cerrarSesion(){
    localStorage.removeItem("id");
    localStorage.removeItem("usuario");
    localStorage.clear();
    this.identificado=null;
    this.usuario=null;
  }
}
