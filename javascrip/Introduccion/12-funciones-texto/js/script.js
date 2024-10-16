/*finciones
predeterminadad en js
*/

//Funciones para trasformar texto

'use strict'

var numero = 888;
var tex1 = "  Bienvenido al curso de Javascrip  ";
var tex2 = " TEXTO EN MAYUSCULA";

//1- Transformar de nro a string

var nroconvertido = numero.toString();
console.log(nroconvertido);
console.log(typeof (nroconvertido));

//2-cambiar valores de minusculas a mayusculas

var tex1MAYUS = tex1.toUpperCase();
console.log(tex1MAYUS);

//3-Cambiar valores de mayusculas a minusculas
var tex2minus = tex2.toLocaleLowerCase();
console.log(tex2minus);

//4-Longitud de un String
var longitud = "Rodrigo Rojas";
console.log(longitud.length);

//5-Concatenar
console.log(tex1 + tex2);

//6-Array longitud
var array = ["Hola","Como","estas?"];
console.log(array.length);

//7-Buscar por indice
var busqueda = tex1.indexOf("curso");
console.log(busqueda);

//8-Buscar por indice
var busqueda2 = tex1.lastIndexOf("de");
console.log(busqueda2);

//9-Buscar por indice 2
var busqueda3 = tex1.search("Javascrip");
console.log(busqueda3);


//10- match
var busqueda4 = tex1.match("al");
console.log(busqueda4);


//11- quitar espacio de adelante o de atras
var sustraerespacios = tex1.substr(14,6);
console.log(sustraerespacios);

//12- Quitar letra
var quitar = tex1.charAt(2);
console.log(quitar);

//13- Busqueda con startswitch cuando las palabras inician con un valor, esto devuelve true o false
var busqueda5 = tex1.startsWith("Bienve");
console.log(busqueda5);

//14- includes
var busqueda6 = tex1.includes("javascrip");
console.log(busqueda6);

//15- Reemplazar una palabra por otra
var reemplazar = tex1.replace("Javascrip", "java");
console.log(reemplazar);

//16- borrar una parte y devolver el valor indicado
var borrarparte = tex1.slice(12, 20);
console.log(borrarparte);

//17- split convertir texto en array
var texarray = tex1.split();
var texarray = tex1.split("  ");
console.log(texarray);

//18 - Quitar espacios con trim
var quitarespacios = tex1.trim();
console.log(quitarespacios);

//19- Uso de plantillas
var nombre = prompt("Ingrese el Nombre");
var apellido = prompt("Ingrese el Apellido");
//alt + 96 ``
var plantilla = `
<h1>Hola que tal</h1>
<h3>el Nombre es: ${nombre}</h3>
<h3>el Apellido es: ${apellido}</h3>`; 
document.write(plantilla);