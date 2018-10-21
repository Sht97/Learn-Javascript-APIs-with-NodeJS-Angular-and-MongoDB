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
