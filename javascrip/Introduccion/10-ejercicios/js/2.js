/*Ejercicios 
utilizar un bucle y mostar las medidas y el promedio del usuario hasta que el usuario ungrese un 
nro negativo
*/

var suma = 0;
contador = 0;

do{
    var numero = parseInt(prompt("Ingrese numeros hasta que ingreses un negativo", 0));
    if(contador == 3){
        alert("Si quieres parar ingresa un valor negativo");
    }
    if(isNaN(numero)){
        numero=0;
    }else if(numero >= 0){
        suma = suma + numero
        contador++;
    }
} while(numero>=0){
    alert("La suma es: " + suma);
    alert("El promedio es: " + suma/contador);
}