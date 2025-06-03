let contador = 0;

    function cambiarContador(valor) {
      contador += valor;
      if (contador < 0) contador = 0;
      document.getElementById('contador').textContent = contador;
    };

	function toggleMenu() {
        document.querySelector('.navegar').classList.toggle('active');
        document.querySelector('.ico').classList.toggle('active');
    };
	
	document.querySelector('.info1').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('color').style.display = 'block';
	});

	document.querySelector('.info2').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('tamano').style.display = 'block';
	});

	document.querySelector('.info3').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('orientacion').style.display = 'block';
	});

	document.querySelector('.info4').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('encuadernado').style.display = 'block';
	});

	// Funciones para cerrar
	function cerrarVentana(id) {
		document.getElementById(id).style.display = 'none';
	}

	// Un único window.onclick
	window.onclick = function(event) {
		const modales = ['color', 'tamano', 'orientacion', 'encuadernado'];

		modales.forEach(function(id) {
			const modal = document.getElementById(id);
			if (event.target === modal) {
				cerrarVentana(id);
			}
		});
	};