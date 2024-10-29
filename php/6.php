<h1>Arrays</h1>
<?php
$autos = array("volvo", "toyota", "kia");
echo "Tengo un: ".$autos[0].",".$autos[1]." y ".$autos[2].".";

echo "<h2>recorrer array con foreach y traer el valor del array</h2>";
foreach($autos as $auto){
    echo $auto;
}

echo "<h2>recorrer array con foreach y traer el valor del array y el indice</h2>";
foreach($autos as $index => $auto){
    echo "El indice es: ".$index. " y la marca es: ".$auto. "<hr>";
}

echo "<h1>Bidimencionales</h1>";
$auto = array(
    array("volvo",22,18),
    array("nissan",15,13),
    array("toyota",20,13),
);

echo $auto[0][0]. ": en Stock : ".$auto[0][1]. " El saldo es: ".$auto[0][2]."<hr>";
echo $auto[1][0]. ": en Stock : ".$auto[1][1]. " El saldo es: ".$auto[1][2]."<hr>";
echo $auto[2][0]. ": en Stock : ".$auto[2][1]. " El saldo es: ".$auto[2][2]."<hr>";
?>