//CLASES PRIMITIVAS

var string=new String("Esto es un string");
var number=new Number(17);
var boolean=new Boolean(false);
var array=new Array(0,1,2,"Daniel");
console.log("String",string);
console.log("boolean",boolean);
console.log("Number",number);
console.log("Array",array);

// Clase Array
var object=new Object({nombre:"Daniel",apellido:"Rivera",edad:20});
console.log("Object",object);

//Clases creadas por el desarrollador

function Persona(){
    //Atributos y propiedades públicas
    this.nombre;
    this.edad;
}

var yo=new Persona();
yo.nombre="Daniel Rivera";
yo.edad=20;

console.log("Persona",yo);

//Clases con parametros
function Persona1(edad,nombre){
    this.edad=edad;
    this.nombre=nombre;

}
var yo1=new Persona1(21,"Majose");
console.log("persona1",yo1);