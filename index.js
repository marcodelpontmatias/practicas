alert("test");
let nombres = [
  {nombre: "Matias"}
  {nombre: "Julian"}
]
let body = document.getElementsByTagName("body")[0];
nombres.forEach(function(nombre){
  let h2 = document.createElement("h2");
  h2.innerHTML = nombre;
  body.appendChild(h2);
