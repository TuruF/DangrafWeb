function toggleMenu() {
    document.querySelector('.navegar').classList.toggle('active');
    document.querySelector('.ico').classList.toggle('active');
};

function displayimg(caja) {
	let cambiacolor = [
        "../img/tazablue.png",
        "../img/tazared.png",
        "../img/tazayellow.png",
        "../img/tazapink.png",
        "../img/tazagreen.png",
        "../img/tazablack.png",
        "../img/taza.png",
        "../img/tazabluel.png",
        "../img/tazapurple.png",
        "../img/tazaorange.png"
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

let cantidadProductos = 1;
let totalCarrito = 0;
const carrito = [];

function actualizarContadorVisual() {
    const contadorElemento = document.querySelector ('.contador');
        contadorElemento.textContent = carrito.length;
        contadorElemento.style.display = carrito.length > 0 ? 'inline-block': 'none';
};

function agregarCarrito(nombre, precio, imagen) {
    carrito.push({ nombre, precio, imagen, cantidad: cantidadProductos });
    totalCarrito++;
    actualizarCarrito();
    actualizarContadorVisual();
    
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = '✅ Producto añadido al carrito';

    mensaje.classList.add('mostrar');

    setTimeout(() => {
        mensaje.classList.remove('mostrar');
    }, 2500);
};

function eliminarCarrito() {
    if (carrito.length > 0) {
        carrito.pop();
        totalCarrito--;
        actualizarCarrito();
        actualizarContadorVisual();

        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = '❌ Producto eliminado del carrito';
        mensaje.classList.add('mostrar');

        setTimeout(() => {
            mensaje.classList.remove('mostrar');
        }, 2500);
    }
};

function actualizarCarrito() {
    const lista = document.getElementById("carrito-lista");
    const total = document.getElementById("carrito-total");
    const contador = document.getElementById("contador-carrito");
    lista.innerHTML = "";
    
    carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} = ${item.precio} €`;
    lista.appendChild(li);
    });

    const suma = carrito.reduce((acc, item) => acc + item.precio, 0);
    total.textContent = suma.toFixed(2);
    contador.textContent = carrito.length;
};

function mostrarModal() {
    document.getElementById("modal-carrito").style.display = "flex";
};

function cerrarModal() {
    document.getElementById("modal-carrito").style.display = "none";
};

const miniatura = document.getElementById("color");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagen-modal");

// Abrir modal al hacer clic en la imagen
miniatura.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

// Cerrar al hacer clic en la imagen
modal.onclick = function (e) {
    if (e.target === modalImg) {
        modal.style.display = "none";
    }
};