"use strict";

var express = require("express");

//Cargamos el módulo del controlador
var ControladorUsuarios = require("../controladores/usuarios.controlador.js");
var api = express.Router();
var md_aut = require("../token/aut.js");

/*Creamos  la ruta con el método GET, para pasar el método qeu va
a tener que cargar la página cuado hagamos la petición HTTP de esa ruta.
 */
//api.get("/probando-controlador-usuarios",ControladorUsuarios.pruebaUsuarios());
api.get("/probando-controlador-usuarios", md_aut.autenticacion, ControladorUsuarios.pruebaUsuarios);

//Primero creamos la ruta para crear usuarios.
api.post("/crear-usuarios", ControladorUsuarios.crearUsuarios);
//Primero creamos la ruta para el ingreso de usuarios.
api.post("/login", ControladorUsuarios.ingresoUsuario);

//Creamos la ruta para la actualización del usuario usando el método PUT
api.put("/actualizar-usuario/:id", md_aut.autenticacion, ControladorUsuarios.actualizarUsuario);

//Creamos la ruta para borrar usuarios con DELETE
api.delete("/borrar-usuario/:id", md_aut.autenticacion, ControladorUsuarios.borrarUsuario);

module.exports = api;