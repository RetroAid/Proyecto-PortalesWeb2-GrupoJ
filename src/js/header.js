export function initHeaderMenu() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        toggleBtn.setAttribute('aria-expanded', isOpen);
        toggleBtn.classList.toggle('is-active', isOpen);
    });

    // Cierra el menú al hacer clic en un link
    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.classList.remove('is-active');
        });
    });
}
