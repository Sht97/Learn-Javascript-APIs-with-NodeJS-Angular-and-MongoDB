"use strict";

var express = require("express");

//Cargamos el módulo del controlador
var ControladorUsuarios = require("../controladores/usuarios.controlador.js");
var api = express.Router();

/*Creamos  la ruta con el método GET, para pasar el método qeu va
a tener que cargar la página cuado hagamos la petición HTTP de esa ruta.
 */
//api.get("/probando-controlador-usuarios",ControladorUsuarios.pruebaUsuarios());
api.get("/probando-controlador-usuarios", ControladorUsuarios.pruebaUsuarios);

//Primero creamos la ruta para crear usuarios.
api.post("/crear-usuarios", ControladorUsuarios.crearUsuarios);
//Primero creamos la ruta para el ingreso de usuarios.
api.post("/login",ControladorUsuarios.ingresoUsuario);

module.exports = api;