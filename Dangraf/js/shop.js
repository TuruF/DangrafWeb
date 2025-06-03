function toggleMenu() {
        document.querySelector('.navegar').classList.toggle('active');
        document.querySelector('.ico').classList.toggle('active');
    };

const modal = document.getElementById("ventana");
    const modalImg = document.getElementById("modal-img");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const cerrar = document.querySelector(".close");

    document.querySelectorAll(".detalles").forEach(btn => {
        btn.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = btn.getAttribute("data-img");
        modalTitulo.textContent = btn.getAttribute("data-titulo");
        modalDescripcion.textContent = btn.getAttribute("data-descripcion");
        });
    });

    cerrar.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    };