function toggleMenu() {
        document.querySelector('.navegar').classList.toggle('active');
        document.querySelector('.ico').classList.toggle('active');
    };

function displayimg(caja) {
	let cambiacolor = [
        "../img/bolsablue.png",
        "../img/bolsared.png",
        "../img/bolsablue.png",
        "../img/bolsared.png",
        "../img/bolsablue.png",
        "../img/bolsared.png"
    ];
    
    let index = parseInt(caja.dataset.value);
    document.getElementById('color').src = cambiacolor[index];

    let divs = document.querySelectorAll('.galeria div');
        divs.forEach(div => {
            div.classList.remove('activo');
        });

        // Añade la clase 'activo' al div clicado
        caja.classList.add('activo');
};

let contador = 0;

function agregarCarrito() {
    contador++;

    const contadorElemento = document.querySelector('.contador');
    if (contadorElemento) {
        contadorElemento.textContent = contador;

        // Mostrar el contador solo si es mayor que 0
        if (contador > 0) {
            contadorElemento.style.display = 'inline-block';
        } else {
            contadorElemento.style.display = 'none';
        }
    }

    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = '✅ Producto añadido al carrito';

    mensaje.classList.add('mostrar');

    setTimeout(() => {
        mensaje.classList.remove('mostrar');
    }, 2500);
};

function eliminarCarrito() {
    if (contador > 0) {
        contador--;
        const contadorElemento = document.querySelector('.contador');
        contadorElemento.textContent = contador;
        if (contador === 0) {
            contadorElemento.style.display = 'none';
        }
    }

    const mensaje = document.getElementById('mensaje');
        mensaje.textContent = '❌ Producto eliminado del carrito';
        mensaje.classList.add('mostrar');

        setTimeout(() => {
            mensaje.classList.remove('mostrar');
        }, 2500);
};