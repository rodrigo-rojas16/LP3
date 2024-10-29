<?php
include 'conexion.php';

if (isset($_POST['Insertar'])) {
    if (!empty($_POST['nombre']) && !empty($_POST['mensaje'])) {
        $nombre = trim($_POST['nombre']);
        $mensaje = trim($_POST['mensaje']);

        $stmt = $conexion->prepare("INSERT INTO persona (nombre, mensaje) VALUES (?, ?)");
        $stmt->bind_param("ss", $nombre, $mensaje);

        if ($stmt->execute()) {
            echo "La inserción de datos fue exitosa";
            echo '<meta http-equiv="refresh" content="5;url=formulario.php">';
        } else {
            echo "Problemas para insertar: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo 'Los campos nombre y mensaje no pueden estar vacíos.';
    }
} elseif (isset($_POST['Enviar/Editado'])) { // Corrección aquí
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $mensaje = $_POST['mensaje'];

    $query = mysqli_query($conexion, "UPDATE persona SET nombre ='$nombre', mensaje = '$mensaje' WHERE id = $id") 
        or die('Error: ' . mysqli_error($conexion));

    if ($query) { // Verifica si la consulta fue exitosa
        echo "La modificación fue exitosa";
        ?>
        <meta http-equiv="refresh" content="1;url=http://localhost/LP3/examen/formulario.php"> 
        <?php
    } else {
        echo "No se pudo realizar la modificación";
    }
}

elseif (isset($_POST['Enviar/Borrar'])) { // Asegúrate de que la sintaxis esté correcta
    $id = $_POST['id'];
    
    // V    erifica que $id sea un número para evitar inyección SQL
    if (is_numeric($id)) {
        // Verificar si el ID existe en la base de datos
        $checkQuery = mysqli_query($conexion, "SELECT COUNT(*) AS count FROM persona WHERE id = $id")
            or die('Error: ' . mysqli_error($conexion));
        
        $row = mysqli_fetch_assoc($checkQuery);
        
        if ($row['count'] > 0) {
            // El ID existe, proceder a eliminar
            $query = mysqli_query($conexion, "DELETE FROM persona WHERE id = $id")
                or die('Error: ' . mysqli_error($conexion)); 
            
            if ($query) {
                echo "Se eliminó correctamente";
                ?>
                <meta http-equiv="refresh" content="3;url=http://localhost/LP3/examen/formulario.php"> 
                <?php
            } else {
                echo "Problemas para eliminar";
                ?>
                <meta http-equiv="refresh" content="3;url=http://localhost/LP3/examen/formulario.php"> 
                <?php
            }
        } else {
            echo "ID no válido o no existe.";
            ?>
            <meta http-equiv="refresh" content="3;url=http://localhost/LP3/examen/formulario.php"> 
            <?php
        }
    } else {
        echo "ID no válido.";
        ?>
        <meta http-equiv="refresh" content="3;url=http://localhost/LP3/examen/formulario.php"> 
        <?php
    }
    
}


?>
