<h1>Condicionales en PHP</h1>
<h2>Condicional if</h2>
<?php
/*if(){
    bloque de instrucciones

}else{
    bloque de instrucciones
}

*/
$hora = date("H:i:s");
if($hora > "20"){
    echo "Que tengas un buen dia";
}

?>
<h2>Condicional if else</h2>
<?php
$hora = date("H");
if($hora > "20"){
    echo "Que tengas un buen dia";
}else{
    echo "Que tengas buenas noches";
}

?>

<h2>Condicional else if</h2>
<?php
$hora = date("H");
if($hora < "10"){
    echo "Que tengas un buen dia";
}elseif($hora > "20"){
    echo " Que tengas una buena tarde";
}
else{
    echo "Que tengas buenas noches";
}

?>

<h1>Switch</h1>
<?php
$color = "rojo";
switch($color){
    case "rojo":
        echo " Mi color favorito es rojo";
    break;
    case "azul":
        echo "Mi colo favorito es azul";
    break;
    case "verde":
        echo "Mi colo favorito es verde";
    break;
    break;
    default;
        echo "Mi color favorito no esta entre las opciones";
}
?>