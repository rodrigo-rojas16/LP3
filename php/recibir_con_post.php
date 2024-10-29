<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if(isset($_POST['nombre']) && isset($_POST['email'])){
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
    }else{
        echo "no se ha ingresado el nombre o el email";
    }

    ?>
    Hola: <?php echo $nombre; ?><br>
    Tu email es: <?php echo $email; ?>
</body>
</html>