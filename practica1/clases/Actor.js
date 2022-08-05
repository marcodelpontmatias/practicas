class Actor{
  nombre;
  constructor(nombre){
    this.nombre = nombre;
  }
  describir(){
    console.log("Soy el actor " + this.nombre)
  }
}
export default Actor;
