/*Ejercicios 
Crear una tabla de multiplicar


'use strict'

var nro = parseInt(prompt('Ingrese el valor'));

document.write("<h1> La tabla de </h1>" + nro);

for(var i = 0; i <=10; i++){
    document.write(i + "x" + nro + "=" + (i*nro) + "<hr>");
}
*/

'use strict';

var nro = parseInt(prompt('Ingrese el valor'));

if (isNaN(nro)) {
    document.write("<h1>Por favor ingrese un número válido.</h1>");
} else {
    document.write("<h1> La tabla de " + nro + "</h1>");
    for (var i = 0; i <= 10; i++) {
        document.write(i + " x " + nro + " = " + (i * nro) + "<hr>");
    }
}

//tabla hasta el 10

for(var c = 0; c <=10; c++){
    document.write("La tabla de " + c + " es: <hr>");
    for(var d=1; d<=10; d++){
        document.write(d + "x" + c + "=" + (d*c) + "<hr>")
    }
}
