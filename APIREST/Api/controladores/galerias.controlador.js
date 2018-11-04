"use strict";


var Galerias = require("../modelos/galerias.modelo.js");
var fs = require("fs");
var path = require("path");
//Método de prueba
function pruebaGalerias(req, res) {

    res.status(200).send({mensaje: "Probando el controlador de galerias"})

}

function crearFoto(req, res) {

    var galerias = new Galerias();

    if (req.files) {
        var imagen_ruta = req.files.foto.path;
        var imagenSplit = imagen_ruta.split("/");
        galerias.foto = imagenSplit[2];
        galerias.save((error, fotoGuardada) => {
            if (error) {
                res.status(500).send({mensaje: "Error al guardar la foto"})
            }
            else {
                if (!fotoGuardada) {
                    res.status(404).send({mensaje: "No se ha podido guardar la foto"})
                } else {
                    res.status(200).send({fotoGuardada})
                }
            }
        })

    }
}

function mostrarFotos(req, res) {
    Galerias.find((error, mostrandoFotos) => {
        if (error) {
            res.status(500).send({mensaje: "Error en la aplicacion"})
        } else {
            res.status(200).send({mensaje: mostrandoFotos})
        }
    }).sort("_id")
}

function borrarFoto(req, res) {

    var id = req.params.id;

    Galerias.findOne({_id: id}, (error, capturarFoto) => {

        if (error) {

            res.status(500).send({mensaje: "Error al capturar la foto"})

        } else {

            if (!capturarFoto) {

                res.status(404).send({mensaje: "No se ha podido capturar ella foto"})

            } else {

                var antiguaImagen = capturarFoto.foto;
                var rutaImagen = "./ficheros/galeria/" + antiguaImagen;
                fs.unlink(rutaImagen, (error) => {
                    if (error) {
                        console.log("la imagen: " + rutaImagen + " ya no existe");
                    }
                })
            }
        }

    });

    setTimeout(function () {

        Galerias.findByIdAndRemove(id, (error, borrarFoto) => {

            if (error) {

                res.status(500).send({mensaje: "Error al borrar la foto"})

            } else {

                if (!borrarFoto) {

                    res.status(404).send({mensaje: "No se ha podido borrar la foto"})

                } else {

                    res.status(200).send({borrarFoto})
                }

            }

        })

    }, 1000)

}
function tomarImagenGaleria(req, res){

    var imagen = req.params.foto;
    var rutaImagen = "./ficheros/galeria/"+imagen;

    fs.exists(rutaImagen, function(exists){

        if(exists){

            res.sendFile(path.resolve(rutaImagen))

        }else{

            res.status(404).send({mensaje: "La imagen no existe"})

        }

    })

}

//Exportamos los métodos del módulo
module.exports = {
    tomarImagenGaleria,
    borrarFoto,
    crearFoto,
    pruebaGalerias,
    mostrarFotos
};