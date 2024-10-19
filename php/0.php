<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //comentario de linea simple
    /* comentario extendido */
    //variable
    $variable = 5;
    echo $variable;
    echo "<hr>"; // ingresar codigo html en php
    $cadena = "hola mundo desde PHP";
    print $cadena;
    echo "<hr>";
    $cadena2 = "hola mundo desde PHP";
    echo  "<h1>$cadena2<h1>";
    echo  "esto es ", "String", "Se pueden escribir separados ente ,";
    echo "<hr>";
    $variableboolean = true;
    var_dump($variableboolean);// sirve para saber que contienel una variable
    echo "<hr>";
    $variabledecimal = 3.14;
    var_dump($variabledecimal);
    ?>

    <h1>Tipo de datos objetos</h1>
    <?php
    class auto{
        function __construct(){
            $this-> marca = "Toyota";
            $this-> modelo = "Platz";
            $this-> motor = "1.3";
        }
    }

    $automovil = new auto();
    echo $automovil -> modelo;
    echo $automovil ->marca;

    echo "<hr>";
    echo "<h1> variables null</h1>";
    $x = null;
    var_dump($x);
    ?>
</body>
</html>