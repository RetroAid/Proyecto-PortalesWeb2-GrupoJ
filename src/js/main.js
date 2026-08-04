import { initHeaderMenu } from './header.js';
import { initContactForm } from './contact-form.js';
import { initActiveNav } from './active-nav.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderMenu();
    initContactForm();
    initActiveNav();
});