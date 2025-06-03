function toggleMenu() {
        document.querySelector('.navegar').classList.toggle('active');
        document.querySelector('.ico').classList.toggle('active');
    };

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navegar a');
    const currentURL = window.location.href;

    links.forEach(link => {
        const linkURL = new URL(link.href, location.origin).href;
        if (currentURL === linkURL) {
            link.classList.add('active');
        }
    });
});

const modal = document.getElementById("ventana");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");
const cerrar = document.querySelector(".close");

    document.querySelectorAll(".detalles").forEach(btn => {
        btn.addEventListener("click", () => {
        modal.style.display = "block";
        document.body.classList.add('no-scroll');
        modalImg.src = btn.getAttribute("data-img");
        modalTitulo.textContent = btn.getAttribute("data-titulo");
        modalDescripcion.textContent = btn.getAttribute("data-descripcion");
        window.scrollTo({ top: 0, behavior: 'instant' }); // Desplaza la página hacia arriba de forma inmediata sin animación
        });
    });

    cerrar.onclick = () => {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll');
    };

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll');
        }
    };