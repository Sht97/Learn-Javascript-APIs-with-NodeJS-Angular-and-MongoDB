class Automovil {
    public marca:string;
    public modelo:string;

    //La unica diferencia de un método y una funcion es que llamamos método a las funciones de una clase o de un objeto(En POO)
    //Llamamos funciones a los algoritmos de la programación estructurada.
    public mostrar(){
        return "Soy un cacahuate, "+this.marca+" "+this.modelo;
    }
}

//Objeto: es una entidad provista de métodos o mensajes los cuales responde a propiedades con valores concretos.
var automovil1=new Automovil();
automovil1.marca="Chevrolet";
automovil1.modelo="Camaro";
console.log(automovil1.mostrar());