function  probar (){ for(var i=0;i<10;i++){
console.log("Valor númerico de i",i);

}

var n=0;
while(n <10) {
console.log("El valor de n es:"+n);
n++;
}

do {
console.log("valor de n",n);
n--;
}while(n>0);
var boxes=document.querySelectorAll(".Boxes");
for(var j=0;j<boxes.length;j++) boxes[j].innerHTML="New box"+j;
}
