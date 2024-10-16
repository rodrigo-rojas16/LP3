/*funciones
conjunto de instrucciones que se ejecutan cuando se las llama
*/
//Definir una funcion
function calculadora (){
    var mensaje = alert("Hola soy una funcion, me tenes que llamar para que funcione");
}
//llamar a la funcion
calculadora();

//funcion donde se pide ingresar el valor

function calcular (n1, n2, mostrar = false){
    if(mostrar == false){
        alert("Tenes que activarme con true");
    }else{
        var suma = n1 + n2;
        return suma;
    }
}

var nr1 = parseInt(prompt("Tngrese el valor 1"));
var nr2 = parseInt(prompt("Tngrese el valor 2"));
var mostrar =prompt("Mostrar");

alert(calcular(nr1, nr2, mostrar));