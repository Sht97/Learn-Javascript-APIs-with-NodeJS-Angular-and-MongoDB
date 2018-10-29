// Objeto con las propiedades de la calculadora
var p={
    teclas:document.querySelectorAll("#calculadora ul li"),
    accion:null,
    digito:null,
    operaciones:document.querySelector("#operaciones")
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
        p.digito=tecla.target.innerHTML;
        m.calculadora(p.accion,p.digito)
    },
    calculadora:function (accion,digito) {
        switch (accion) {
            case "number":
                p.operaciones.innerHTML+=digito;
                break;
            case "operacion":
                let a=p.operaciones.innerHTML[p.operaciones.innerHTML.length-1];
                let oper=["+","-","*","/"];
                if(p.operaciones.innerHTML!=="" && !oper.includes(a)) {
                    p.operaciones.innerHTML += digito;
                }
                break;
            case "decimal":
                console.log("Decimal");
                break;
            case "igual":
                console.log("igual");
                break;
        }
    },
    borrar:function () {
        p.operaciones.innerHTML="";
    }
};

m.inicio();