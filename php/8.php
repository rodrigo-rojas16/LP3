<h1>Procesar formulario dentro de un mismo archivo con GET</h1>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="GET">
        Nombre: <input type="text"name=nombre>
        <input type="submit">
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "GET"){
        $nombre = $$_GET['nombre'];
        if(empty($nombre)){
            echo "Escriba un nombre!";
        }else{
            echo "El nombre es: $nombre";
        }
    }
?>



</body>
</html>