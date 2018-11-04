"use strict";

//Método de prueba
function pruebaSlides(req, res) {

    res.status(200).send({mensaje: "Probando el controlador de slides"})

}

var Slides = require("../modelos/slides.modelo.js");

var fs=require("fs");

var path = require("path");
function crearSlide(req, res) {

    var slides = new Slides();
    var parametros = req.body;
    slides.titulo = parametros.titulo;
    slides.descripcion = parametros.descripcion;

    if (req.files) {
        var imagen_ruta = req.files.imagen.path;
        var imagenSplit = imagen_ruta.split("/");
        slides.imagen = imagenSplit[2];
        if (slides.titulo != null && slides.descripcion != null) {
            slides.save((error, slideGuardado) => {
                if (error) {
                    res.status(500).send({mensaje: "Error al guardar el slide"})
                }
                else {
                    if (!slideGuardado) {
                        res.status(404).send({mensaje: "No se ha podido guardar el slide"})
                    } else {
                        res.status(200).send({slideGuardado})
                    }
                }
            })
        }
    }
}

function mostrarSlides(req, res) {
    Slides.find((error, mostrandoSlides) => {
        if (error) {
            res.status(500).send({mensaje: "Error en la aplicacion"})
        } else {
            res.status(200).send({mensaje: mostrandoSlides})
        }
    }).sort("_id")
}


function actualizarSlide(req,res){

    var slides = Slides();

    var id = req.params.id;
    var parametros = req.body;

    slides.titulo = parametros.titulo;
    slides.descripcion = parametros.descripcion;

    var cambioImagen = false;

    if(parametros.actualizarImagen == "0"){

        slides.imagen = parametros.rutaImagenActual;
        cambioImagen = true;

    }else{

        if(req.files){

            var imagenRuta = req.files.imagen.path;
            var imagenSplit = imagenRuta.split("/");

            slides.imagen = imagenSplit[2];

            var antiguaImagen = parametros.rutaImagenActual;
            var rutaImagen = "./ficheros/slide/"+antiguaImagen;

            fs.unlink(rutaImagen, (error)=>{
                if(error){
                    console.log("la imagen: " + rutaImagen + " ya no existe");
                }
            });
        }

        cambioImagen = true;

    }

    if(cambioImagen){

        if(slides.titulo != null && slides.descripcion != null && slides.imagen != null){

            var actualizar = {
                "titulo": slides.titulo,
                "descripcion": slides.descripcion,
                "imagen": slides.imagen
            }

            Slides.findByIdAndUpdate(id, actualizar, (error, slideActualizado)=>{

                if(error){

                    res.status(500).send({mensaje: "Error al actualizar el Slide"})

                }else{

                    if(!slideActualizado){

                        res.status(404).send({mensaje: "No se ha podido actualizar el Slide"})

                    }else{

                        res.status(200).send({slideActualizado});

                    }

                }

            })

        }

    }

}

function borrarSlide(req,res){

    var id=req.params.id;
    Slides.findOne({_id:id},(error,capturarSlide)=>{
        console.log(id);
        if(error){
            res.status(500).send({mensaje:"Error al capturar el Slide"})
        }else {
            if(!capturarSlide){
                res.status(500).send({mensaje:"No se ha podido capturar el slide"})
            }else {
                var antiguaImagen=capturarSlide.imagen;
                var rutaImagen = "./ficheros/slide/"+antiguaImagen;

                fs.unlink(rutaImagen, (error)=>{
                    if(error){
                        console.log("la imagen: " + rutaImagen + " ya no existe");
                    }
                });
            }
        }
    });

    setTimeout(function () {
        Slides.findByIdAndRemove(id,(error,borrarSlide)=>{
            if(error){
                res.status(500).send({mensaje:"Error al borrar el Slide"})
            }else {
                if(!borrarSlide){
                    res.status(500).send({mensaje:"No se ha podido borrar el slide"})
                }else {
                    res.status(200).send({borrarSlide})
                }
            }
        })

    },1000);

}
function tomarImagenSlide(req,res){

    var imagen = req.params.imagen;
    var rutaImagen = "./ficheros/slide/"+imagen;

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
    tomarImagenSlide,
    actualizarSlide,
    crearSlide,
    pruebaSlides,
    mostrarSlides,
    borrarSlide
};