/* Condiciones y cambios*/

const number1=2;
const number2=5;
if (number1>number2){
    console.log("A mayor que B")
}else if (number1<number2){
    console.log("B mayor que A")
}
else{
    console.log("Son iguales")
}

var day="Lunes";

switch (day) {
    case "Lunes":
        console.log("Clases de 8 a 2");
        break;

    case "Martes" || "Jueves":
        console.log("Clase de 8 a 12 y pulmón en la tarde");
        break;
    case "Miercoles" || "Viernes":
        console.log("Clase de 8 a 12 solamente");
        break;
    default:
        console.log("No hay clase este dia");
        break;
}