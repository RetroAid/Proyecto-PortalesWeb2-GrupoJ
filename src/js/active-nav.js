export function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach((link) => {
        const linkPath = link.getAttribute('href');

        // Limpiamos la clase 'active' por si acaso
        link.classList.remove('active');

        // Comparamos si la ruta actual termina con el href del enlace
        if (
            (currentPath === '/' && linkPath.includes('index.html')) ||
            (linkPath && currentPath.endsWith(linkPath))
        ) {
            link.classList.add('active');
        }
    });
}