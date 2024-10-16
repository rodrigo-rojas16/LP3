/* 4- condicionales 
if(condicion){
    bloque de instrucciones
}else{
    bloque de instrucciones
}

else if(){

}

switch
*/

// if else y else if
var numero = 8;
if(numero>10){
    alert('El numero es: '+ numero);
}

else if(numero == 10){
    alert('El numero es: ' + numero);
}

else{
alert("El numero es: " + numero);
}

//switch
var edad = 800;
var imprimir = "";
 switch(edad){
    case 18:
        imprimir = "Es menor de edad";
        break;
    case 50:
        imprimir = " Ya eres adulto";
        break
    case 80:
        imprimir = "Eres muy adulto";
        break
    default:
        imprimir = "Tienes otra edad";
 }

 document.write(imprimir);