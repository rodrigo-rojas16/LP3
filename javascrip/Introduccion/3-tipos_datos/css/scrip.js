/*Tipos de datos */

//Numericos

var nro1 = 50;
var nro2 = 25;
//operadores
var suma = nro1 + nro2;
var resta = nro1 - nro2;
var multi = nro1 * nro2;
var divi = nro1 / nro2;
var porcentaje = nro1 % nro2;
var decimal = 25.2;
var vardadero = true;
var falso = false;

var texto = "El resultado de la operacion es: ";
document.write(texto, suma, "<hr>");
document.write(texto, resta, "<hr>");
document.write(texto, multi, "<hr>");
document.write(texto, divi, "<hr>");
document.write(texto, porcentaje, "<hr>");
document.write(texto, decimal, "<hr>");
document.write(vardadero, "<hr>", falso, "<hr>");

//Funciones para convertir datos
document.write("<h1>Funciones para convertir datos</h1>");


//convertir string a numero
var numerico = '30';
document.write(numerico);
var tipodatosstring = typeof(numerico);
document.write(tipodatosstring + "<hr>");

//ver tipo de dato
var numerico_convertido = Number(numerico);
document.write(numerico_convertido);
var tipodato = typeof(numerico_convertido);
document.write(tipodato + "<hr>");

//convertir numero a string
var nroentero =40;
var convertidostring = String(nroentero); 
var tipostring = typeof(convertidostring);
document.write(convertidostring, tipodatosstring);

//parseInt
var nrostring = '100';
var parse = parseInt(nrostring);
document.write("<hr> El numero es:" + parse)
console.log(typeof(parse));