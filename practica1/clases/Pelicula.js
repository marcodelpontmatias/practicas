class Pelicula{
  nombre;
  anio;
  actores;
  constructor(nombre, anio){
    this.nombre = nombre;
    this.anio = anio;
    this.actores = [];
  }
  describir(){
    console.log("Pelicula: " + this.nombre + " del año: " + this.anio);
  }
  agregarActor(actor){
    this.actores.push(actor);
  }
  mostrarCasting(){
    console.log("Actores: " + this.actores.join(", "));
  }
}
export default Pelicula;
