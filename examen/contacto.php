<?php
include 'conexion.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contactos</title>
    <link rel="stylesheet" href="css/contacto.css">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="js/script_validation.js"></script>
</head>
<body>
    <div class="tarjeta_principal">
        <div class="tarjeta_izquierda">
            <img src="img/FB_IMG_1661774662947.jpg" alt="contacto">
        </div>
        <div class="tarjeta_derecha">
            <h1 class="tarjeta_titulo">CONTACTO</h1>
            <form action="procesar.php" method="POST">
                <div class="formulario_nombres">
                    <div>
                        <label for="nombre">Nombre</label><br>
                        <input type="text" name="nombre" id="nombre" required><br>
                    </div>
                </div>
                <div>
                    <label for="mensaje">Mensaje</label><br>
                    <input type="text" name="mensaje" id="mensaje" required><br>
                </div>
                <div class="boton_container">
                    <input type="submit" name="Insertar" value="Insertar" class="formulario_enviar">
                </div>
                <div class="boton_container">
                    <input type="button" value="Inicio" class="formulario_enviar" onclick="window.location.href='index.html'">
                </div>
            </form>
        </div>
    </div>
</body>
</html>
