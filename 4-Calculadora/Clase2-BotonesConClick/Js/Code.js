// Objeto con las propiedades de la calculadora
var p={
    teclas:document.querySelectorAll("#calculadora ul li"),
    accion:null
};

//Objeto con las funciones
var m={
    inicio:function () {
        for(var i=0;i<p.teclas.length;i++){
            p.teclas[i].addEventListener("click",m.oprimirTecla);
        }
    },
    oprimirTecla:function (tecla) {
        p.accion=tecla.target.getAttribute("class");
        m.calculadora(p.accion)
    },
    calculadora:function (accion) {
        switch (accion) {
            case "number":
                console.log("Numero");
                break;
            case "operacion":
                console.log("operador");
                break
            case "decimal":
                console.log("Decimal");
                break;
            case "igual":
                console.log("igual");
                break;
        }
    }
};

m.inicio();