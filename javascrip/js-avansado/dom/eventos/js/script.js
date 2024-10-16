/*Eventos
son funciones que se ejecutan cada vez que se realiza algo
ej: movimientos del raton, teclado, borrar, etc
*/


//corregir llamar en las etiquetas correspondientes al script.js
window.addEventListener('load', () =>{


var boton2 = document.querySelector("#boton2");

function cambiarColor() {
    var bg = boton2.style.background; 
    if(bg == "green"){
        boton2.style.background = "red";
    }else{
        boton2.style.background = "aqua";

    }
}


//3- evento clic
var boton3 = document.querySelector("#boton3");
boton3.addEventListener('click', function(){
    cambiarColor();
});

//4- evento mouse over

boton3.addEventListener('mouseover', function(){
    boton3.style.background = "brown";
})

//5- mouse out
boton3.addEventListener('mouseout', function(){
    boton3.style.background = "yellow";
})

//6- evento focus
var input = document.querySelector("#nombre");
input.addEventListener('focus', function(){
    console.log("Estas haciendo focus en este input");
})

//7- evento blur
input.addEventListener('blur', function(){
    console.groupCollapsed("Estas fuera del input");
})

//8- keydown al escribir dentro de un input
input.addEventListener('keydown', function(event) {
    console.log("Estás pulsando la tecla: ", event.key);
})

//9- keypress
input.addEventListener('keypress', function(event){
    console.log("tecla presionada con keypres", String.fromCharCode(event.keyCode));
})

//10- keyup
input.addEventListener('keyup', function(event){
    console.log("Tecla soltada es: ", String.fromCharCode(event.keyCode));
});


}); //fin del load