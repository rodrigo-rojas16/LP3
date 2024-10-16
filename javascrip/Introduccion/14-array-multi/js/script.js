/*Array arreglos multidimensionales
Predeterminadas en js
*/

'use strict'
var categorias = ["Z", "X", "Accion", "Comedia", "Terror"];
var peliculas = ["Peli de accion", "Peli de comedia", "Peli de terror"];

var cine = [categorias, peliculas];
console.log(cine[1][2]);

//1 operaciones con array 
//1.1 Añadir elementos
peliculas.push("Batman");
console.log(peliculas);

//1.2 Quitar elementos
peliculas.pop();
console.log(peliculas);

//1.3 Añadir elementos con el promt

var elemento = "";
do{
    elemento = prompt("Introduce un peli");
    peliculas.push(elemento);
    
}while(elemento != "Parar");

//1.4 Recorrer array y mostrar valores en pantalla
peliculas.forEach((pelis)=>{
    document.write("Peliculas: " + pelis + "<hr>");
});

//1.5 Convertir array en texto
var pelistring = peliculas.join();
console.log(typeof pelistring, pelistring);

//3 Convertir texto a array
var cadena = "texto 1, texto2, texto3";
console.log(cadena.split());

// 4 Ordenar array en orden alfabetico sort
categorias.sort();
console.log(categorias);

//5 Invertir orden reverse
peliculas.reverse();
console.log(peliculas);