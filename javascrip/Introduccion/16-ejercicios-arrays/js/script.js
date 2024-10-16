/*Ejercicos arrays
*/
/*Crar un programa
1- Pida 6 numeros ingresados por pantalla
2- mostrar el array entero en el cuerpo de la pagina y consola
3- mostrar array ordenado
4- invertir el orden y mostrarlo
5- mostrar cuantos elementos tiene
6- buscar un valor introducido por el usuario y que nos muestre tambien su indice
*/
'use strict'
//crear funcion para imprimir resultados en el cuerpo de la pagia
function mostrararray(elementos, texto=""){
    document.write("<h1>Contenido del Array</h1>");
    var resultado = numeros.forEach((elementos, indice) => {
    document.write("</ul>");
    document.write("<li>" + elementos + "</li>");
    document.write("</ul>");
    });
}

//1- Pida 6 numeros ingresados por pantalla
var numeros = new Array (6);
for(var i = 0; i < numeros.length; i++){
    numeros[i] = parseInt(prompt("introduce numeros"));
}
document.write("<h1>Contenido del Array</h1>");
var resultado = numeros.forEach((valores) => {
    document.write("</ul>");
    document.write("<li>" + valores + "</li>");
    document.write("</ul>");
});

console.log(numeros);

//2- mostrar y ordenarlo
var Ordenar = numeros.sort(function(a, b){return a - b});
console.log(Ordenar);

//invertir el orden y mostrarlo
numeros.reverse
//utilizar funcion creada anteriormente
mostrararray(numeros, " En orden reverso o inverso");

//Mostrar cuantos elementos tiene
document.write("<h1>El array tiene:" +  numeros.length + " elementos" + "</h1>")

//Buscar un valor introducido por el usuario y que nos muestre tambien su indice
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numeros => numeros == busqueda);
if(posicion && posicion != -1){
    document.write("El valor es: " + valor + " y la posicion esta en: " + posicion);
}else{
    document.write("No econtrado o no es un numero ");
}