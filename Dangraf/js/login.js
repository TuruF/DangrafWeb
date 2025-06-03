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