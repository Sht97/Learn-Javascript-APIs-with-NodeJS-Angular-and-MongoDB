"use strict";

var token = require("jwt-simple");

//moment nos permite hacer registros de fechas de creación y espiración del token

var momento = require("moment");

var claveSecreta = "clave_secreta";

exports.crearToken = function (seleccionUsuario) {

    var cargarToken = {
        sub: seleccionUsuario._id,
        nombre: seleccionUsuario.usuario,
        now: momento().unix(),
        exp: momento().add(30, "days").unix()
    };
    return token.encode(cargarToken, claveSecreta);
};