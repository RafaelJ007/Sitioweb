document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contacto-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const interes = document.getElementById('interes').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !apellidos || !email || !telefono || !interes || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (!validatePhone(telefono)) {
            alert('Por favor, ingresa un número de teléfono válido.');
            return;
        }

        // Aquí puedes agregar el código para enviar los datos a tu servidor
        // usando fetch o XMLHttpRequest, dependiendo de tu configuración.
        
        alert('Formulario enviado con éxito.');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePhone(telefono) {
        const re = /^[0-9]{10}$/; // Ajusta esta expresión regular según el formato esperado
        return re.test(telefono);
    }
});
