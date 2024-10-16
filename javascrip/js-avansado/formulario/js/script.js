window.addEventListener('load', () => {
    $('#nombre').on('keyup blur', function() {
        var node = $(this);
        // Reemplaza cualquier carácter que no sea una letra (mayúscula o minúscula)
        node.val(node.val().replace(/[^a-zA-Z]/g, ''));
    });

    $('#apellido').on('keyup blur', function() {
        var node = $(this);
        // Reemplaza cualquier carácter que no sea una letra (mayúscula o minúscula)
        node.val(node.val().replace(/[^a-zA-Z]/g, ''));
    });

    $('#ci').on('keyup blur', function() {
        var node = $(this);
        // Reemplaza cualquier carácter que no sea un número
        node.val(node.val().replace(/[^0-9]/g, ''));
    });

    document.getElementById('email').addEventListener('input', function(event) {
        var valido = document.getElementById('emailok');
        var emailreg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,64}\.){1,50}[A-Z]{2,10}$/i;

        // Verifica si el correo es válido
        if (emailreg.test(this.value)) {
            valido.innerText = "Email correcto!";
           // valido.classList.remove('text-muted'); // Opcional: quita el color de texto gris
            // valido.classList.add('text-success'); // Añade el color de texto verde
        } else {
            valido.innerText = "Email incorrecto!";
           // valido.classList.remove('text-success'); // Opcional: quita el color de texto verde
            // valido.classList.add('text-muted'); // Añade el color de texto grisl
        }
    });
});
