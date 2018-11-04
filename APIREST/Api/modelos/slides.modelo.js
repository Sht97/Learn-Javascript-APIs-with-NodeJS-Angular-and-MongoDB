"use strict";

var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var SlidesScheme=Schema({
    imagen:String,
    titulo:String,
    descripcion:String
});
module.exports=mongoose.model("Slides",SlidesScheme);