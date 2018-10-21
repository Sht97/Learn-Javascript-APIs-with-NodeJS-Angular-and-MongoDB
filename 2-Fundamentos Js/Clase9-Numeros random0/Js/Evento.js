var cajaGrande=document.querySelector("#puto");
var botona =document.querySelector("#boton");
function cambiar() {

    cajaGrande.style.height="40px";
}

botona.addEventListener("click",moverCaja);
function moverCaja() {

    cajaGrande.style.width="80px";
    cajaGrande.style.transition="1s width ease"
}