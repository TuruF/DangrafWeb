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

	function cerrarColor() {
		document.getElementById('color').style.display = 'none';
	};

	window.onclick = function(event) {
		if (event.target === document.getElementById('color')) {
		cerrarColor();
		}
	};

	document.querySelector('.info2').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('tamano').style.display = 'block';
	});

	function cerrarTamano() {
		document.getElementById('tamano').style.display = 'none';
	};

	window.onclick = function(event) {
		if (event.target === document.getElementById('tamano')) {
		cerrarTamano();
		}
	};

	document.querySelector('.info3').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('orientacion').style.display = 'block';
	});

	function cerrarOrientacion() {
		document.getElementById('orientacion').style.display = 'none';
	};

	window.onclick = function(event) {
		if (event.target === document.getElementById('orientacion')) {
		cerrarOrientacion();
		}
	};

	document.querySelector('.info4').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('encuadernado').style.display = 'block';
	});

	function cerrarEncuadernado() {
		document.getElementById('encuadernado').style.display = 'none';
	};

	window.onclick = function(event) {
		if (event.target === document.getElementById('encuadernado')) {
		cerrarEncuadernado();
		}
	};