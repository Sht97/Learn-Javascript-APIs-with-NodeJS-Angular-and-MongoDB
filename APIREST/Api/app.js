"use strict"
var express=require("express");
var bodyParser=require("body-parser");

//La variable app es el objeto de express
/*Esto va a ser el motor de la aplicación del backend
porque va a recibir las peticiones http, vamos a poder crear
controladores, crear rutas, crear todas las cosas fundamentales
dentro de un framework de desarrollo a nivel backend
*/

var app=express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//cargar rutas
var rutaUsuarios=require("./rutas/usuarios.ruta.js");
var rutaSlides=require("./rutas/slides.ruta.js");
var rutaGalerias=require("./rutas/galerias.ruta.js");


//Rutas base
//Estado 200 OK
//Estado 404 petición no encontrada
//Estado 500 error interno del servidor.
/*app.get("/pruebas",function (req,res) {
    res.status(200).send({message:"Bienvenido"})
});*/
app.use("/api",rutaUsuarios);
app.use("/api",rutaSlides);
app.use("/api",rutaGalerias);
module.exports=app;