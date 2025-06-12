document.querySelectorAll('.detalles').forEach(boton => {
      boton.addEventListener('click', () => {
        const titulo = boton.getAttribute('data-titulo');
        const descripcion = boton.getAttribute('data-descripcion');
        const imagen = boton.getAttribute('data-img');

        document.getElementById('modal-titulo').textContent = titulo;
        document.getElementById('modal-descripcion').textContent = descripcion;
        document.getElementById('modal-img').src = imagen;

        document.getElementById('ventana').style.display = 'block';
      });
    });

    document.querySelector('.close').addEventListener('click', () => {
      document.getElementById('ventana').style.display = 'none';
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
        li.textContent = `${item.titulo} x${item.cantidad} = ${(item.precio * item.cantidad).toFixed(2)}€`;
        lista.appendChild(li);
        total += item.precio * item.cantidad;
        cantidadTotal += item.cantidad;
      });

      document.getElementById('total').textContent = total.toFixed(2);

      // Actualizar contador visual
      const contador = document.querySelector('.contador');
      console.log("Contador:", contador);
      if (contador) {
        if (cantidadTotal > 0) {
          contador.style.display = 'inline-block';
          contador.textContent = cantidadTotal;
        } else {
          contador.style.display = 'none';
        }
      }
    }

    // Abrir carrito
    document.querySelector('.ico .icon img[alt="Cesta"]').parentNode.addEventListener('click', () => {
      document.getElementById('carrito-modal').style.display = 'block';
    });

    // Cerrar carrito
    document.querySelector('.close-carrito').addEventListener('click', () => {
      document.getElementById('carrito-modal').style.display = 'none';
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
  