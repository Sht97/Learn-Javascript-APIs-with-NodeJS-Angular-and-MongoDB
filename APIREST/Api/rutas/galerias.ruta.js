"use strict";

var express=require("express");
var api=express.Router();
var md_aut = require("../token/aut.js");
//Cargamos el módulo del controlador
var ControladorGalerias=require("../controladores/galerias.controlador.js");

var multipart=require("connect-multiparty");
var fichero=multipart({uploadDir:"./ficheros/galeria"});


/*Creamos  la ruta con el método GET, para pasar el método qeu va
a tener que cargar la página cuado hagamos la petición HTTP de esa ruta.
 */
//api.get("/probando-controlador-usuarios",ControladorUsuarios.pruebaUsuarios());
api.get("/probando-controlador-galerias",ControladorGalerias.pruebaGalerias);
api.post("/crear-foto",[md_aut.autenticacion,fichero],ControladorGalerias.crearFoto);
api.get("/mostrar-fotos",ControladorGalerias.mostrarFotos);
api.delete("/borrar-foto/:id",ControladorGalerias.borrarFoto);
api.get("/tomar-imagen-galeria/:foto", ControladorGalerias.tomarImagenGaleria);
module.exports=api;