/*Array busquedas
*/

'use strict'
var lenguajes = ["Javascrip", "Java", "PHP", "C++", "Python"];

//find
var buscafind = lenguajes.find(lenguajes => lenguajes  == "Java");
console.log(buscafind);

//findindex
var bucaindex = lenguajes.findIndex(lenguajes => lenguajes == "PHP");
console.log(bucaindex);

//Busquedas de valores numericos con some (devuelve true o false)
var numeros = [10,30,50,80,90,100,30];
var buscaposinrs = numeros.some(numeros => numeros >= 30);
console.log(buscaposinrs);

