"use strict";

var token = require("jwt-simple");
var momento = require("moment");
var claveSecreta = "clave_secreta";

/*Creamos un middleware*/


exports.autenticacion = function (req, res, next) {

    if (!req.headers.authorization) {
        return res.send(403).send({mensaje: "La petición no tiene cabecera de autorización"})
    } else {
        var tokenEnviado = req.headers.authorization.replace(/['"]+/g, '');

        try {
            var cargaToken = token.decode(tokenEnviado, claveSecreta);
            if (cargaToken.exp <= momento().unix()) {
                return res.status(403).send({mensaje: "El token ha expirado"})
            }
        } catch (e) {

            console.log(e);
            return res.status(403).send({mensaje: "EL token no es valido"})
        }
        req.usuarioToken = cargaToken;
        next();
    }
};