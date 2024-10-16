/*Ejercicios 
mostrar todos los numeros que hay entre dos nros ingresados por el usuario
*/


'use strcit'

var nro1 = parseInt(prompt("Ingrese el nro desde:"));
var nro2 = parseInt(prompt("Ingrese el nro hasta:"));
document.write("<h1>De " + nro1 + 'a' + nro2+ " estan estos numeros</h1>")

for(var i = nro1; i <= nro2; i++){
    document.write('<h3>' + i + "</h3>", '<hr>');   
}