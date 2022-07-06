alert("test");
let personas = [
  {nombre: "Matias"},
  {nombre: "Julian"}
];
let body = document.getElementsByTagName("body")[0];
personas.forEach(function(persona){
  let h2 = document.createElement("h2");
  h2.innerHTML = persona.nombre;
  body.appendChild(h2);
});
