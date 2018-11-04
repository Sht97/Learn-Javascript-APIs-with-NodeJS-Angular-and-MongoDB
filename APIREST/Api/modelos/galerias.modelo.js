"use strict";

var mongoose=require("mongoose");
var Schema=mongoose.Schema;



var GaleriaScheme=Schema({
    foto:String,

});
module.exports=mongoose.model("Galerias",GaleriaScheme);