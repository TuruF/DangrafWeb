function toggleMenu() {
        document.querySelector('.navegar').classList.toggle('active');
        document.querySelector('.ico').classList.toggle('active');
    };

// Modal de detalles
document.querySelectorAll('.detalles').forEach(boton => {
    boton.addEventListener('click', () => {
      const titulo = boton.getAttribute('data-titulo');
      const descripcion = boton.getAttribute('data-descripcion');
      const imagen = boton.getAttribute('data-img');

      document.getElementById('modal-titulo').textContent = titulo;
      document.getElementById('modal-descripcion').textContent = descripcion;
      document.getElementById('modal-img').src = imagen;

      document.getElementById('ventana').style.display = 'block';
      document.body.classList.add('no-scroll'); //quita el scroll
      setTimeout(() => {
        // Ir al top de la página
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
    });
});

    document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('ventana').style.display = 'none';
    document.body.classList.remove('no-scroll'); //hace que aparezca otra vez el scroll al cerrar la ventana
  });

  // Carrito de compras
  let carrito = [];

  function agregarAlCarrito(producto) {
    const existente = carrito.find(item => item.titulo === producto.titulo);
    if (existente) {
      existente.cantidad++;
    } else {
      producto.cantidad = 1;
      carrito.push(producto);
    }
    actualizarCarrito();
  }

  document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', () => {
      const titulo = boton.getAttribute('data-titulo');
      const precio = parseFloat(boton.getAttribute('data-precio'));
      const img = boton.getAttribute('data-img');

      agregarAlCarrito({ titulo, precio, img });
    });
  });

  function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${item.titulo}
        <button class="btn-menos" data-titulo="${item.titulo}"><img src="../img/menos.png" alt="Quitar uno"></button>
        <span class="cantidad">${item.cantidad}</span>
        <button class="btn-mas" data-titulo="${item.titulo}"><img src="../img/mas.png" alt="Sumar uno"></button>
        = ${(item.precio * item.cantidad).toFixed(2)}€
      `;
      lista.appendChild(li);
      total += item.precio * item.cantidad;
      cantidadTotal += item.cantidad;
    });

    document.getElementById('total').textContent = total.toFixed(2);

    // Actualizar contador visual
    const contador = document.querySelector('.contador');
    if (cantidadTotal > 0) {
      contador.style.display = 'inline-block';
      contador.textContent = cantidadTotal;
    } else {
      contador.style.display = 'none';
    }
  }

  // Manejar botones dinámicos + y -
  document.addEventListener('click', function (e) {
  const botonMas = e.target.closest('.btn-mas');
  const botonMenos = e.target.closest('.btn-menos');

  if (botonMas) {
    const titulo = botonMas.getAttribute('data-titulo');
    const producto = carrito.find(item => item.titulo === titulo);
    if (producto) {
      producto.cantidad++;
      actualizarCarrito();
    }
  }

  if (botonMenos) {
    const titulo = botonMenos.getAttribute('data-titulo');
    const producto = carrito.find(item => item.titulo === titulo);
    if (producto) {
      producto.cantidad--;
      if (producto.cantidad <= 0) {
        carrito = carrito.filter(item => item.titulo !== titulo);
      }
      actualizarCarrito();
    }
  }
});

  // Abrir carrito
  document.querySelector('.ico .icon img[alt="Cesta"]').parentNode.addEventListener('click', () => {
    document.getElementById('carrito-modal').style.display = 'block';
  });

  // Cerrar carrito haciendo clic fuera
  document.getElementById('carrito-modal').addEventListener('click', function (event) {
    const contenido = document.querySelector('.carro-content');
    if (!contenido.contains(event.target)) {
      this.style.display = 'none';
    }
  });

  // Finalizar compra
  document.getElementById('checkout').addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('Tu carrito está vacío.');
    } else {
      alert('¡Gracias por tu compra!');
      carrito = [];
      actualizarCarrito();
      document.getElementById('carrito-modal').style.display = 'none';
    }
  });