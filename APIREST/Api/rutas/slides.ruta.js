"use strict";

var express=require("express");

//Cargamos el módulo del controlador
var ControladorSlide=require("../controladores/slides.controlador.js");
var api=express.Router();
var md_aut = require("../token/aut.js");
//Cargamos la dependenciapara subir ficheros
var multipart=require("connect-multiparty");
var fichero=multipart({uploadDir:"./ficheros/slide"});

/*Creamos  la ruta con el método GET, para pasar el método qeu va
a tener que cargar la página cuado hagamos la petición HTTP de esa ruta.
 */
//api.get("/probando-controlador-usuarios",ControladorUsuarios.pruebaUsuarios());
api.get("/probando-controlador-slides",ControladorSlide.pruebaSlides);
api.post("/crear-slide",[md_aut.autenticacion,fichero],ControladorSlide.crearSlide);
api.get("/mostrar-slides",ControladorSlide.mostrarSlides);
api.put("/actualizar-slide/:id",[md_aut.autenticacion,fichero],ControladorSlide.actualizarSlide);
api.delete("/borrar-slide/:id",[md_aut.autenticacion,fichero],ControladorSlide.borrarSlide);
api.get("/tomar-imagen-slide/:imagen", ControladorSlide.tomarImagenSlide);
module.exports=api;