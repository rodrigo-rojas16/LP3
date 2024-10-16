/*
DOM
Documen objet Model
El DOM se aplica a las etiquetas HTML mediante el atributo id
en el caso de utilizar DOM las etiquetas HTML <script> se inicializan antes de finalizar el body
*/

//1 ingresar el elemento por su id
//var caja = document.getElementById("micaja").innerHTML = ("texto cambiado con DOM");
//console.log(caja);

// Seleccionar por id
'use strict'

function cambiarcolor(color, color2){
    caja.style.background = color;
    otraforma.style.background = color2;
}

var caja = document.getElementById("micaja");
caja.innerHTML = "Texto cambiado por segunda vez!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "micajaconclase";
console.log(caja);

//seleccionar por queryselector
var otraforma = document.querySelector("#micaja2");
otraforma.style.color = "blue";
console.log(otraforma);

//seleccionar elementos por etiquetas
var todoslosdiv = document.getElementsByTagName('div');
var valordivseleccionado = todoslosdiv[2].textContent;
console.log(valordivseleccionado);

var cambiarseleccionado = todoslosdiv[2];
cambiarseleccionado.style.background = "greenyellow";

//Recorrer todos los div con for in
var tododiv = document.getElementsByTagName("div");
var valor;
for(valor in tododiv){
    if(typeof tododiv[valor].textContent == "string"){
    var parrafo = document.createElement("p"); //crear parrafos
    var texto = document.createTextNode(tododiv[valor].textContent);
    parrafo.append(texto);
    //console.log();
    document.querySelector("#misecion").append(parrafo);
    }
}

//como llamar a elementos por su calse
var divclasse = document.getElementsByClassName("micajaconclase");
if (divclasse.length > 0) {
    divclasse[0].style.background = "yellow"; // Cambiar a amarillo
} else {
    console.log("No se encontró el elemento con la clase micajaconclase.");
}
