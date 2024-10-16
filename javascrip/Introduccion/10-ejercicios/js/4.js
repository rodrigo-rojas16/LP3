/*Ejercicios 
mostrar todos los numeros que son pares e impares entre dos valores ingresados
*/

'use strict'

var nro1 = parseInt(prompt('Ingrese el primer valor'));
var nro2 = parseInt(prompt('Ingrese el segundo valor'));

while(nro1 < nro2){
    nro1++;
    if(nro1 % 2 != 0){
        document.write(nro1, 'Es impar<hr>');
    }else if(nro1 % 2 ==0 ){
        document.write(nro1, 'Es par<hr>');
    }
}