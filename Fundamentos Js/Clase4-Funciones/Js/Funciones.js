function saludo() {
    console.log("Hello from the other side");
}
function operation1(number1,number2) {
    return number1+number2
}
function operation2(number1,number2) {
    console.log("Suma2",number1+number2)
}

saludo();//Sin parametro
operation2(7,8);
console.log("Suma1",operation1(3,4));