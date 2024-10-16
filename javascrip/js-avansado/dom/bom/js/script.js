/*BOM
browser objet mode
manipular el navegador y obtener datos
*/

//1- Tama;o ancho de la ventanada del navegador
console.groupCollapsed(window.innerWidth, "Ancho de la Pagina");
console.groupCollapsed(window.innerHeight, "Alto de la Pagina");

//2- crear una funcion para traer el ancho y alto del navegador
function traerbom(ancho, largo){
    var ancho = console.groupCollapsed(window.innerWidth, "Ancho de la Pagina");
    var alto = console.groupCollapsed(window.innerHeight, "Alto de la Pagina");
}
traerbom();

//4- traer el tama;o de ral
console.log(screen.width, "ancho de la pagina");
console.log(screen.height, "alto de la pagina");


// 5- Traer una url
console.log(window.location, "Esto es la url donde estar ahora");

//6- funcion para redireccionar a otra url
function redirect(url){
    window.location.href = url;
}

redirect(url);

//7- Abrir otra ventana del navegador
function abrirventana(url){
    window.open(url, "","whdth=400, height=300");
}

abrirventana(url);