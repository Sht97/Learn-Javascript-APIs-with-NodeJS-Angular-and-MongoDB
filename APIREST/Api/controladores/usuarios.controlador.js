"use strict";
//Método de prueba
function pruebaUsuarios(req, res){

    res.status(200).send({mensaje:"Probando el controlador de usuarios"})

}

//Exportamos los métodos del módulo
module.exports={
    pruebaUsuarios
};