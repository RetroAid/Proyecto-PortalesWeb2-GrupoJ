import '../less/style.less';
import { initHeaderMenu } from './header.js';
import { initContactForm } from './contact-form.js';
import { initActiveNav } from './active-nav.js';
import { initCitas } from './citas.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderMenu();
    initContactForm();
    initActiveNav();
    initCitas();
});
