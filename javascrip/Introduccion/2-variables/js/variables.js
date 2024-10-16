/* 1-Variables */

//2- 'use strcit'//Esto es para el lenguaje sea mas sensible a fallos

//3- Variables de tipo cadena
var pais = "<h1>Paraguay</h1>";
var continente = '<h1>'+'America'+'</h1>';
//concatenar 
var p_c = pais + '-' + continente;

console.log(p_c);
document.write(pais+"<hr>");
document.write(continente);

//2- Modo estrcito
//'use strcit'
//4- Let permite definir variables limitando su alcance
//5- var permite definir variables y utilizarlas globalmente

let varlet = "esto es una variable let";
document.write("<br>" + varlet);

//6- Constantes Es una variable que no puede cambiar de valor 
// y se define con la palabra const

var web = "https://google.com";
console.log(web);
const constweb = "https://youtube.com";
constweb = "otra pagina"; //para cambiar el valor de la constante
console.log(constweb);
