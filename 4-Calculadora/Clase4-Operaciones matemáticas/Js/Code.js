// Objeto con las propiedades de la calculadora
var p={
    teclas:document.querySelectorAll("#calculadora ul li"),
    accion:null,
    digito:null,
    operaciones:document.querySelector("#operaciones"),
    onDecimal:false,
    eval:false
};

//Objeto con las funciones
var m={
    inicio:function () {
        for(var i=0;i<p.teclas.length;i++){
            p.teclas[i].addEventListener("click",m.oprimirTecla);
        }
    },
    teclado: function() {
        document.addEventListener("keydown", m.oprimir);},
        oprimir: function(tecla) {

        if (tecla.keyCode == 48 || tecla.keyCode == 96) {

            p.accion = "numero";
            p.digito = 0;
        }

        else if (tecla.keyCode == 49 || tecla.keyCode == 97) {

            p.accion = "numero";
            p.digito = 1;
        }

        else if (tecla.keyCode == 50 || tecla.keyCode == 98) {

            p.accion = "numero";
            p.digito = 2;
        }

        else if (tecla.keyCode == 51 || tecla.keyCode == 99) {

            p.accion = "numero";
            p.digito = 3;
        }

        else if (tecla.keyCode == 52 || tecla.keyCode == 100) {

            p.accion = "numero";
            p.digito = 4;
        }

        else if (tecla.keyCode == 53 || tecla.keyCode == 101) {

            p.accion = "numero";
            p.digito = 5;
        }

        else if (tecla.keyCode == 54 || tecla.keyCode == 102) {

            p.accion = "numero";
            p.digito = 6;
        }

        else if (tecla.keyCode == 55 || tecla.keyCode == 103) {

            p.accion = "numero";
            p.digito = 7;
        }

        else if (tecla.keyCode == 56 || tecla.keyCode == 104) {

            p.accion = "numero";
            p.digito = 8;
        }

        else if (tecla.keyCode == 57 || tecla.keyCode == 105) {

            p.accion = "numero";
            p.digito = 9;
        }

        else if (tecla.keyCode == 187 || tecla.keyCode == 107) {

            p.accion = "signo";
            p.digito = "+";
        }

        else if (tecla.keyCode == 189 || tecla.keyCode == 109) {

            p.accion = "signo";
            p.digito = "-";
        }

        else if (tecla.keyCode == 88 || tecla.keyCode == 106) {

            p.accion = "signo";
            p.digito = "*";
        }

        else if (tecla.keyCode == 111) {

            p.accion = "signo";
            p.digito = "/";
        }

        else if (tecla.keyCode == 190 || tecla.keyCode == 110) {

            p.accion = "decimal";
            p.digito = ".";
        }

        else if (tecla.keyCode == 13) {

            p.accion = "igual";
        }

        else if (tecla.keyCode == 8) {

            p.accion = "";
            m.borrarCalculadora();
        }

        else{
            p.accion = "";
            p.digito = "";

        }


        m.calculadora(p.accion, p.digito);

    },
    oprimirTecla:function (tecla) {
        p.accion=tecla.target.getAttribute("class");
        p.digito=tecla.target.innerHTML;
        m.calculadora(p.accion,p.digito)
    },
    calculadora:function (accion,digito) {
        switch (accion) {
            case "number":
                if(!p.eval){
                    p.operaciones.innerHTML+=digito;
                }
                else {
                    p.operaciones.innerHTML=digito;
                    p.eval=false;
                }
                break;
            case "operacion":
                let a=p.operaciones.innerHTML[p.operaciones.innerHTML.length-1];
                let oper=["+","-","*","/"];
                if(p.operaciones.innerHTML!=="" && !oper.includes(a)) {
                    p.operaciones.innerHTML += digito;
                    p.onDecimal=false;
                }
                break;
            case "decimal":
                if(!p.onDecimal && !p.eval){
                    p.operaciones.innerHTML+=digito;
                    p.onDecimal=true;
                }
                break;
            case "igual":
                p.operaciones.innerHTML=eval(p.operaciones.innerHTML);
                p.onDecimal=false;
                p.eval=true;
                break;
        }
    },
    borrar:function () {
        p.operaciones.innerHTML="";
        p.onDecimal=false;
        p.eval=false;
    }
};
m.teclado();
m.inicio();