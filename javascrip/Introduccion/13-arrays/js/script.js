/*Array arreglos 
Predeterminadas en js
*/

'use strict'
// Variable normal
var nombre = "Rodrigo Rojas";

// Definir un array

var nombres = ["Fernado Rojas", "Yessica Rojas", "Derlis Rojas", 52, 15, 20, true];

//otra forma de establecer un array
var lenguajes = new Array ("java", "PHP", "Javascrip", "Python", "C++");
console.log(nombres);
console.log(lenguajes);

//Acceder a elementos
console.log("El lenguaje 2 es: " + lenguajes[2]);

//Imprimir un elemento ingresando el nro de indice
var seleccion = parseInt(prompt("Que lenguaje seleccionaras ??", 0));
if(seleccion >= lenguajes.length){
    alert("No existe esa posicion, introduce un nro menor " + lenguajes.length);
}else{
    alert(lenguajes[seleccion]);
}

//Recorrer un array
document.write("<h1>Imprimir elementos con for</h1>");
document.write("<ul>");
for(var i = 0; i<lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");

// 2 recorrer un array con forech
document.write("<h1>Imprimir elementos con foreach</h1>");
document.write("<ul>");
    lenguajes.forEach((elemento, indice, array) => {
        console.log(elemento);
        console.log(indice);
        console.log(array);
        document.write("<li>" + "El indice es: " + indice + " = " + elemento + "</li>");
    });
document.write("</ul>");

// 3 recorrer con for in
document.write("<h1>Imprimir elementos con for in</h1>");
document.write("<ul>");
for(let lenguaje in lenguajes){
    document.write("<li>" + "El lenguaje es: " + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");
