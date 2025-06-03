// Validación adicional con JavaScript
document.getElementById('loginForm').addEventListener('submit', function (e) {
    if (!document.getElementById('check').checked) {
        alert("Debes aceptar la política de privacidad y los términos para continuar.");
        e.preventDefault(); // Evita el envío del formulario
    }
});

document.querySelector('.forget').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('ventana').style.display = 'block';
});

function cerrarVentana() {
	document.getElementById('ventana').style.display = 'none';
};

window.onclick = function(event) {
	if (event.target === document.getElementById('ventana')) {
	cerrarVentana();
	}
};

function toggleMenu() {
    document.querySelector('.navegar').classList.toggle('active');
    document.querySelector('.ico').classList.toggle('active');
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario
    
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    
    // Validar que ambos campos no estén vacíos
    if (email && pass) {
        // Si está todo relleno te redirige a la página de inicio
        window.location.href = '../index.html';
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
