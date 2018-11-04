"use strict";

var mongoose=require("mongoose");
var Schema=mongoose.Schema;

//Creamos el esquema con los respectivos atributos.

var UsuarioScheme=Schema({
    usuario:String,
    password:String
});
module.exports=mongoose.model("Usuarios",UsuarioScheme);