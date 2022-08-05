import Pelicula from "./clases/Pelicula.js";
import Actor from "./clases/Actor.js";

const pelicula1 = new Pelicula("Piratas del Caribe", 2996);
pelicula1.describir();
pelicula1.mostrarCasting();

const actor1 = new Actor("Julian");
actor1.describir();

const actor2 = new Actor("Martin");
actor2.describir();

const actor3 = new Actor("Miguel");
actor3.describir();

const actor4 = new Actor("Luis");
actor4.describir();

pelicula1.agregarActor(actor1.nombre);
pelicula1.agregarActor(actor2.nombre);
pelicula1.agregarActor(actor3.nombre);
console.log(pelicula1);
pelicula1.mostrarCasting();
