/*Problema 1 de los 4 atletas
* De cuatro corredores de atletismo se sabe C ha llegado inmediatamente después de B , y D ha llegado en medio de A y
* C , podría usted calcular el orden de llegada?
* */

var a={
    A:0,
    B:0,
    C:0,
    D:0,
    resultado:function (){
        return a.C > a.B &&
            a.C < a.D < a.A &&
            a.D > a.B;

    },
    intervalo:setInterval(function () {

        a.A=Math.ceil(Math.random()*4);
        a.B=Math.ceil(Math.random()*4);
        a.C=Math.ceil(Math.random()*4);
        a.D=Math.ceil(Math.random()*4);
        if (a.resultado()){

            console.log("Atleta A=",a.A);
            console.log("Atleta B=",a.B);
            console.log("Atleta C=",a.C);
            console.log("Atleta D=",a.D);
            clearInterval(a.intervalo)

        }
    },10)
};
