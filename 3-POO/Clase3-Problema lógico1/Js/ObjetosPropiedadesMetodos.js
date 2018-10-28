var object={
  //Una propiedad es una asociación de Atributo-->valor.
  nombre:"Daniel",
  apellido:"Rivera",
  edad:20,
  descripcion:function () {
      let nameFull=this.nombre+" "+this.apellido;
      console.log("Su nombre es :"+nameFull)
  },
    saludar:function (saludo) {
        console.log(saludo)
    }
};

object.descripcion();
object.saludar("Hello world");

//Objetos primitivos ejm math

var day=new Date();
console.log(day);