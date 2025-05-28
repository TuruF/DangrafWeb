    document.getElementById('inputDocumento').addEventListener('change', function(event) {
        if (event.target.files.length > 0) {
            alert('Archivo cargado: ' + event.target.files[0].name);
        }
    });

    function toggleMenu() {
        document.querySelector('.navegar').classList.toggle('active');
        document.querySelector('.ico').classList.toggle('active');
    };