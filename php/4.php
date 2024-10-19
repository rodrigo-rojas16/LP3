<h1>Estructura For</h1>
<?php
/*
for(variable iteradora; condicion variable; variable++){
    bloque de instrucciones;
}

*/

for($i = 0; $i <=10; $i++){
    echo " El nro es: $i <hr>";
}

echo "<h1>Foreach para recorrecr matrices</h1>";
$colores = array ("rojo", "azul", "verde", "amarillo");
foreach($colores as $valores){
    echo "$valores <hr>";
}

echo "<h1>Foreach para recorrecr matrices con indices de datos</h1>";
$año = array("Rodrigo" =>"35", "Juan" => 37, "Maria" =>25);
foreach($año as $nombre => $edad){
echo "$nombre = $edad <hr>";
}

echo "<h1>Break para parar la ejecucion</h1>";
for ($a = 0; $a<10; $a++){
    if($a == 5){
        break;
    }
    echo "EL numero es: $a <hr>";
}

echo "<h1>Continue para parar la ejecucion</h1>";
for ($a = 0; $a<10; $a++){
    if($a == 5){
        continue;
    }
    echo "EL numero es: $a <hr>";
}
?>