export function initCitas() {
    try {
        const formCitas = document.getElementById('form-citas');
        if (!formCitas) return;

        formCitas.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const fecha = document.getElementById('fecha').value;
            const servicio = document.getElementById('servicio').value;

            if (!nombre || !telefono || !fecha || !servicio) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            if (telefono.length < 8) {
                alert('Por favor, ingrese un número de teléfono válido.');
                return;
            }

            alert(`¡Gracias ${nombre}! Su cita para el servicio de ${servicio} se ha registrado.`);
            formCitas.reset();
        });
    } catch (error) {
        console.error('Error al inicializar el módulo de citas:', error);
    }
}