<?php
/*conexion php con mysql */
//Establecer variables del servidor de la Base de datos
$vhost ='localhost';
$vusser = 'root';
$vpass ='';
$vbd = 'pruebamysqlphp';
$conexion = mysqli_connect($vhost, $vusser, $vpass, $vbd);

if(mysqli_connect_errno()){
echo "La conexion a la base de datos no se pudo establecer, mirrar el error ". mysqli_connect_errno();
}else{
   // echo " La conexion a la base de datos $vbd fue exitosa";
}

?>