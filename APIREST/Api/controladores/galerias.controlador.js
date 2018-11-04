"use strict";
//Método de prueba
function pruebaGalerias(req, res){

    res.status(200).send({mensaje:"Probando el controlador de galerias"})

}

//Exportamos los métodos del módulo
module.exports={
    pruebaGalerias
};