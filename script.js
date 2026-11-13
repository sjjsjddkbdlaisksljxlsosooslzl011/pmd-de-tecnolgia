// Menú de navegación
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function () {
        document.querySelectorAll('nav a').forEach(item => {
            item.style.color = '';
        });

        this.style.color = '#54e4ff';
    });
});

// Encuesta
const encuesta = document.getElementById('formEncuesta');

if (encuesta) {
    encuesta.addEventListener('submit', function (event) {
        event.preventDefault();

        const dispositivo = document.getElementById('dispositivo').value;
        const frecuencia = document.getElementById('frecuencia').value;

        document.getElementById('resultadoEncuesta').textContent =
            `¡Gracias por participar! Usas ${dispositivo} y juegas ${frecuencia}.`;
    });
}

// Mini quiz
function revisarQuiz() {
    const respuesta = document.querySelector(
        'input[name="respuesta"]:checked'
    );

    const resultado = document.getElementById('resultadoQuiz');

    if (!respuesta) {
        resultado.textContent = 'Selecciona una respuesta primero.';
        return;
    }

    if (respuesta.value === 'hardware') {
        resultado.textContent = '¡Correcto! Un control físico es hardware.';
    } else {
        resultado.textContent = 'Inténtalo de nuevo. ¡Tú puedes!';
    }
}

// Comentarios
const formularioComentarios = document.getElementById('formComentarios');

if (formularioComentarios) {
    formularioComentarios.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const comentario = document.getElementById('comentario').value.trim();

        if (nombre === '' || comentario === '') {
            alert('Completa todos los campos.');
            return;
        }

        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('card');

        const titulo = document.createElement('h3');
        titulo.textContent = nombre;

        const texto = document.createElement('p');
        texto.textContent = comentario;

        nuevoComentario.appendChild(titulo);
        nuevoComentario.appendChild(texto);

        document.getElementById('listaComentarios').appendChild(nuevoComentario);

        formularioComentarios.reset();
    });
}
