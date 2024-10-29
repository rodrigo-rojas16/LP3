<?php include 'conexion.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contactos</title>
    <link rel="stylesheet" href="css/formulario.css">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="js/script_validation.js"></script>
</head>
<body>
    <hr>
    <h1>Mostrar los datos de la Base de Datos</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Mensaje</th>
        </tr>
        <?php
            $query = mysqli_query($conexion, "SELECT * FROM persona ORDER BY id ASC");
            if (!$query) {
                die('Error en la consulta: ' . mysqli_error($conexion));
            }
            while ($resultado = mysqli_fetch_assoc($query)) {
                echo "<tr>
                            <td>" . htmlspecialchars($resultado['id']) . "</td>
                            <td>" . htmlspecialchars($resultado['nombre']) . "</td>
                            <td>" . htmlspecialchars($resultado['mensaje']) . "</td>
                        </tr>";
            }
        ?>
    </table>
    <hr>
    <h1>Editar Datos</h1>
    <form action="" method="GET">
        <label for="id">Ingrese el ID a modificar</label><br>
        <input type="text" name="id" required><br>
        <div class="boton_container">
            <input type="submit" value="Enviar" class="formulario_enviar">
        </div>
    </form>
    <?php
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $query = mysqli_query($conexion, "SELECT * FROM persona WHERE id = '$id'");
            if (!$query) {
                die('Error en la consulta: ' . mysqli_error($conexion));
            }
            if ($resultado = mysqli_fetch_assoc($query)) {
                $nombre = htmlspecialchars($resultado['nombre']);
                $mensaje = htmlspecialchars($resultado['mensaje']);
            } else {
                $nombre = '';
                $mensaje = '';
            }
        } else {
            $id = '';
            $nombre = '';
            $mensaje = '';
        }
    ?>
    <form action="procesar.php" method="POST">
        <label for="id">ID</label><br>
        <input type="text" name="id" id="id" value="<?php echo htmlspecialchars($id); ?>" required><br>
        <label for="nombre">Nombre</label><br>
        <input type="text" name="nombre" id="nombre" value="<?php echo htmlspecialchars($nombre); ?>" required><br>
        <label for="mensaje">Mensaje</label><br>
        <input type="text" name="mensaje" id="mensaje" value="<?php echo htmlspecialchars($mensaje); ?>" required><br>
        <div class="boton_container">
            <input type="submit" name="Enviar/Editado" value="Enviar/Editado" class="formulario_enviar">
        </div>
    </form>
    <hr>
    <h1>Borrar Datos</h1>
    <form action="procesar.php" method="POST">
        <label for="id">Ingrese el ID que quieres borrar</label><br>
        <input type="text" name="id" autocomplete="off" required><br>
        <div class="boton_container">
            <input type="submit" name="Enviar/Borrar" value="Enviar/Borrar" class="formulario_enviar">
        </div>
        <div class="boton_container">
            <button type="button" class="formulario_enviar" onclick="window.location.href='index.html';">Inicio</button>
        </div>
    </form>
    <footer class="footer">
        &copy; Diseñado por Rodrigo Rojas
        <p>Contacto: +595(982)890-652</p>
        <p>Red social: 
            <a href="https://www.instagram.com/rodrigo_rojas16/profilecard/?igsh=dGZtcnBlZHJxcThz">
                <img src="img/klipartz.com.png" alt="Instagram" class="instagram-logo">
            </a>
        </p>
    </footer>
</body>
</html>
