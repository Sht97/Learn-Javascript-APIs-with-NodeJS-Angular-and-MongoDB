/*Las variables se declaran como var: usado para variables de toda la vida,
let:son variables locales como las usadas dentro de un método o una clase
const: se usa para constantes que nunca son modificadas*/
//En el console.log se pueden agregar operaciones lógicas.
//los arrays pueden almacenar cualquier tipo de dato junto y permiten operaciones lógicas
const number = 4;
const name="Daniel Rivera";
var array=["Red","Yellow","Blue",false,number,name+" Arroyave",true || true];
var jugo={
    ingrediente1:"fresa",ingrediente2:"mandarina",cucharadaAzucar:3
};
console.log("Name:",`${name} Arroyave`);
console.log("Number",number);
console.log("Boolean",true && false);
console.log("Array",array);
console.log("Index",array[2]);
console.log("SubArray",array.slice(0,3));
console.log("Jugo",jugo);
console.log("Ingedientes",[jugo.ingrediente1,jugo.ingrediente2,jugo.cucharadaAzucar]);

//Variables DOM "Mocelo de objetos del documento"
/*El DOM es la estructura de objetos que genera el navegador cuando carga un documento
y se puede alterar mediante javascript para cambiar dinamicamente los contenidos y aspectos
de la página*/


var boxes=document.querySelectorAll(".Boxes");//Busca todos los elementos con class Boxes retorna como array
console.log("Boxes",boxes);
var box=boxes[0];
box.style.width="200px";
box.style.height="200px";
box.style.background="red";