var parrafo=document.querySelector("#parrafo");
var segundos =0;

//setIntervals()
var intervalo =setInterval(a,1000);
function a(){
    segundos++;
    parrafo.innerHTML=segundos;

}
setTimeout(b,5000)
function b() {

    clearInterval(intervalo);
}