<h1>Funciones</h1>

<?php
/*
function(NombreDeLaFuncion (parametros){
    instrucciones de codigo;
}
*/


function holamundo(){
    echo "Hola mundo desde una funcion!";
    return;
}
holamundo(); //llamar a la funcion

echo "<h1>Funciones pasandole argumentos</h1>";
function NombresFamiliar($nombre){
    echo " El nombre del familiar es: <strong> $nombre </strong> <br>";
}

//utilizar o llamar a la funcion
NombresFamiliar("Rodrigo");
NombresFamiliar("Yessi");
NombresFamiliar("Fernando");

echo "<h1>Funciones pasandole 2 argumentos</h1>";
function NombreAño($vnombre, $año){
    echo "su año de naciemiento es: $año<hr>";
}

NombresFamiliar("Rodrigo", "1994");
NombresFamiliar("Yessi", "4565");
NombresFamiliar("Fernando", "2003");

echo "<h1>Funcion de suma de valores</h1>";
function SumaNros(int $nro1, int $nro2){
    return $nro1 + $nro2;
}

echo "La suma es: ".SumaNros(10,5);

?>