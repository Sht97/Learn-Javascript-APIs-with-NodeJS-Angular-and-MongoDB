var numeroAleatorio=document.querySelector("#Random");
//Los numeros aleatorios se hacen con la libreria MATH
//Math.floor() función piso
//Math.ceil() función techo
//Math.round() redondea el numero
var a=Math.round(Math.random()*100);
numeroAleatorio.innerHTML=a;
