export function initContactForm() {
    const form = document.querySelector('#contacto form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = form.querySelector('#user-name');
        const phoneInput = form.querySelector('#user-phone');
        const messageInput = form.querySelector('#user-message');

        const isValid = [nameInput, phoneInput, messageInput].every((input) => {
            const valid = input.value.trim().length > 0;
            input.classList.toggle('input-error', !valid);
            return valid;
        });

        if (!isValid) return;

        // Conexion del envio
        console.log('Formulario listo para enviar:', {
            name: nameInput.value,
            phone: phoneInput.value,
            message: messageInput.value
        });

        form.reset();
        alert('¡Gracias! Tu consulta fue enviada.');
    });
}