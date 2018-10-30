//Clase: Una clase es un modelo usado para crear modelos que comparten un mismo comportamiento, estado e identidad.
var Propiedades = /** @class */ (function () {
    function Propiedades() {
        this.texto = "Palabra";
        console.log("texto", this.texto);
        this.number = 5;
        console.log("Number", this.number);
        this.bool = true;
        console.log("Boolean", this.bool);
        this.arreglo = [1, 2, 3, 4, "Daniel"];
        console.log("Array", this.arreglo);
        this.cualquiera = { propiedad1: "la primera", propiedad2: 2 };
        console.log("Cualquiera", this.cualquiera);
    }
    return Propiedades;
}());
new Propiedades();
