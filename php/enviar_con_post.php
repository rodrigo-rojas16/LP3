<!DOCTYPE html>
<h1>Formulario con POST procesado mediante otro archivo</h1>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="recibir_con_post.php" method="post">
        Nombre: <input type="text" name="nombre" id="">
        Email: <input type="text" name="email" id="">
        <input type="submit" value="Enviar Info">
        
    </form>
</body>
</html>