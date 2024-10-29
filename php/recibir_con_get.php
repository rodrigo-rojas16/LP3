<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if(isset($_GET['nombre']) && isset($_GET['email'])){
        $nombre = $_GET['nombre'];
        $email = $_GET['email'];
    }else{
        echo "no se ha ingresado el nombre o el email";
    }

    ?>
    Hola: <?php echo $nombre; ?><br>
    Tu email es: <?php echo $email; ?>
</body>
</html>