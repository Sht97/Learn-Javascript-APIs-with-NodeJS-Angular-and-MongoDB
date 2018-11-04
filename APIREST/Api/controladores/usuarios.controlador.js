"use strict";

//Importar el modelo de usuarios
var Usuarios = require("../modelos/usuarios.modelo.js");
var bcrpyt = require("bcrypt-nodejs");

//Método de prueba
function pruebaUsuarios(req, res) {

    res.status(200).send({mensaje: "Probando el controlador de usuarios"})

}

function crearUsuarios(req, res) {

    //Se crea una variable del objeto usuarios.
    var usuarios = new Usuarios();
    var parametros = req.body;

    usuarios.usuario = parametros.usuario;
    if (parametros.password) {

        bcrpyt.hash(parametros.password, null, null, function (error, hash) {
            usuarios.password = hash;
            if (parametros.usuario != null) {
                (usuarios).save((error, usuarioGuardado) => {

                    if (error) {

                        res.status(500).send({mensaje: "Error al guardar usuario"})

                    } else {
                        res.status(200).send({usuarioGuardado})
                    }

                })


            }
        });
    }


}

function ingresoUsuario(req, res) {

    var parametros = req.body;
    var usuario = parametros.usuario;
    var password = parametros.password;

    Usuarios.findOne({usuario: usuario}, (error, seleccionUsuario) => {

            if (error) {
                res.status(500).send({mensaje: "Error al iniciar con este usuario"})
            } else {
                if (!usuario) {
                    res.status(404).send({mensaje: "El usuario no existe"})
                } else {

                    bcrpyt.compare(password, seleccionUsuario.password, function (error, ok) {
                        if (ok) {
                            res.status(200).send({seleccionUsuario})
                        }
                        else {
                            res.status(404).send({mensaje: "El usuario no ha podido ingresar"})
                        }
                    })
                }
            }
        }
    )
}

//Exportamos los métodos del módulo
module.exports = {
    pruebaUsuarios,
    crearUsuarios,
    ingresoUsuario
};