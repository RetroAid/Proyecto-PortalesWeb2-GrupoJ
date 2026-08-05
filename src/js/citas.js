export function initCitas() {
    try {
        const formCitas = document.querySelector('#contacto form');
        if (!formCitas) return;

        formCitas.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('user-name').value.trim();
            const telefono = document.getElementById('user-phone').value.trim();
            const mensaje = document.getElementById('user-message').value.trim();

            if (!nombre || !telefono || !mensaje) {
                mostrarNotificacion('Por favor, complete todos los campos.', 'error');
                return;
            }

            if (telefono.length < 8) {
                mostrarNotificacion('Por favor, ingrese un número de teléfono válido.', 'error');
                return;
            }

            formCitas.reset();
            mostrarNotificacion(`¡Muchas gracias, ${nombre}! Hemos recibido su consulta.`, 'success');
        });
    } catch (error) {
        console.error('Error al inicializar el módulo de citas:', error);
    }
}

function mostrarNotificacion(mensaje, tipo) {
    const alertaExistente = document.querySelector('.form-notification');
    if (alertaExistente) alertaExistente.remove();

    const notificacion = document.createElement('div');
    notificacion.className = `form-notification ${tipo}`;
    notificacion.textContent = mensaje;

    notificacion.style.cssText = `
        margin-top: 15px;
        padding: 12px 18px;
        border-radius: 8px;
        font-size: 0.95rem;
        font-weight: 500;
        text-align: center;
        animation: fadeIn 0.3s ease-in-out;
        background-color: ${tipo === 'success' ? '#d1e7dd' : '#f8d7da'};
        color: ${tipo === 'success' ? '#0f5132' : '#842029'};
        border: 1px solid ${tipo === 'success' ? '#badbcc' : '#f5c2c7'};
    `;

    const formCitas = document.querySelector('#contacto form');
    formCitas.appendChild(notificacion);

    setTimeout(() => {
        notificacion.style.opacity = '0';
        notificacion.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notificacion.remove(), 500);
    }, 5000);
}