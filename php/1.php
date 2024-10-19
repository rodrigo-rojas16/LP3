<h1>Funciones con cadena</h1>
<?php
echo strlen("Hola mundo desde PHP"); // la cantidad de valores que contiene una cadena
echo"<hr>";
$cadena = "  hola mundo  ";
echo trim($cadena); 

echo "<hr>";
echo str_word_count("Hola mundo desde php"); // contador de palabras
echo "<hr>";
$cadena = "Hola mundo desde PHP";
echo strrev($cadena); //sirve para invertir valores
echo "<hr>";
echo strpos("hola mundo desde php", "mundo");
echo "<hr>";
echo str_replace("mundo", "planeta", "hola mundo");
echo "<hr>";
echo (pi());// devuelve en nro pi
echo "<hr>";
echo (min(0,150,30,85,-10,-100));//trae el valor menor de una cadena dde numeros
echo "<hr>";
echo (max(0,150,30,85,-10,-100));//trae el valor mayor de una cadena dde numeros
echo "<hr>";
echo "<h1>Variables Constantes</h1>";
define("nombredeconstante","Bienvenidos al curso de php");//se define primero el nombre y despues la constante
echo nombredeconstante;
echo "<hr>";
define("autos",["BMW","Toyota","Nissan","Kia"]); //define un array de tipo constante
echo autos[0];
?> 