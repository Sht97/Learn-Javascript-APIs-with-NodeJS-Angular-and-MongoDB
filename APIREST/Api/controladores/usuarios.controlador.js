"use strict";

//Importar el modelo de usuarios
var Usuarios = require("../modelos/usuarios.modelo.js");
var bcrpyt = require("bcrypt-nodejs");
var token = require("../token/token.js");

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
                            //res.status(200).send({seleccionUsuario})
                            //Se debe enviar un parametro token en true;
                            if (parametros.token) {
                                //Se devuelve un token de JWT
                                res.status(200).send({token: token.crearToken(seleccionUsuario)})
                            }
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

function actualizarUsuario(req, res) {


    var actualizar = req.body;
    var id = req.params.id;

    if (id != req.usuarioToken.sub) {
        return res.status(500).send({mensaje: "No tienes permiso para actualizar este usuario"})
    }

    Usuarios.findByIdAndUpdate(id, actualizar, (error, usuarioActualizado) => {
        if (error) {
            res.status(500).send({mensaje: "Error al actualizar"})
        } else {

            res.status(200).send(usuarioActualizado)
        }
    })
}

function borrarUsuario(req,res){
    var id = req.params.id;

    if (id != req.usuarioToken.sub) {
        return res.status(500).send({mensaje: "No tienes permiso para eliminar este usuario"})
    }

    Usuarios.findByIdAndRemove(id,(error,usuarioBorrado)=>{
        if (error) {
            res.status(500).send({mensaje: "Error al borrar el usuario"})
        } else {

            res.status(200).send(usuarioBorrado)
        }
    })

}
//Exportamos los métodos del módulo
module.exports = {
    borrarUsuario,
    pruebaUsuarios,
    crearUsuarios,
    ingresoUsuario,
    actualizarUsuario
};