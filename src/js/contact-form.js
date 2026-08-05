export function initContactForm() {
    const regexIsEmpty = /^\s*$/;

    const formulario = document.querySelector("#contacto form");
    if (!formulario) return;

    const nombreCompletoInput = document.getElementById("user-name");
    const telefonoInput = document.getElementById("user-phone");
    const mensajeInput = document.getElementById("user-message");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let objErrores = {};
        let formularioValido = true;

        document.querySelectorAll('.error-text').forEach(n => n.remove());
        document.querySelectorAll('.error').forEach(n => n.classList.remove('error'));

        if (!validarEspacioVacio(nombreCompletoInput.value)) {
            objErrores['txtNombreDiv'] = {
                error: "Nombre Completo no puede estar vacío.",
                input: nombreCompletoInput
            };
            formularioValido = false;
        }

        if (!validarEspacioVacio(telefonoInput.value)) {
            objErrores['txtTelefonoDiv'] = {
                error: "Numero de teléfono no puede estar vacío.",
                input: telefonoInput
            };
            formularioValido = false;
        }

        if (!validarEspacioVacio(mensajeInput.value)) {
            objErrores['txtMensajeDiv'] = {
                error: "Mensaje no puede estar vacío.",
                input: mensajeInput
            };
            formularioValido = false;
        }

        if (formularioValido) {
            formulario.submit();
        } else {
            Object.entries(objErrores).forEach(err => {
                const [key, obj] = err;
                obj.input.classList.add('error');
                const container = document.getElementById(key);
                const errorSpan = document.createElement("div");
                errorSpan.innerText = obj.error;
                errorSpan.classList.add('error-text');
                container.appendChild(errorSpan);
            });
        }
    });

    function validarEspacioVacio(valor) {
        return !regexIsEmpty.test(valor);
    }
}



