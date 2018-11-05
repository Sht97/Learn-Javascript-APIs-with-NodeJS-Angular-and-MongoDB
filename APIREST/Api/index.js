"use strict";


var mongoose = require("mongoose");
var app = require("./app");

//Esto se hace para establecer la variable de entorno PORT (Puerto HTTP)
var port = process.env.PORT || 1237;
//Conexion a base de datos
mongoose.connect("mongodb://moocuser:moocdatabase1@ds151853.mlab.com:51853/mooc_mongodb", (error, respuesta) => {
        if (error) {
            throw error;
        } else {

            console.log("Conexión a la base de datos ha sido exitosa");
            app.listen(port, function () {
                console.log("Servidor del APIREST en http://localhost:" + port);
            })
        }
    }
);