import indexContext from './index_page.js';
import aboutContext from './about_page.js';
import servicesContext from './services_page.js';
import faqContext from './faq_page.js';
import contactContext from './contact_page.js';

export default (page) => {
    switch (page) {
        case '/':
        case '/index.html':
            return indexContext;
        case '/about_us.html':
            return aboutContext;
        case '/services.html':
            return servicesContext;
        case '/faq.html':
            return faqContext;
        case '/contact.html':
            return contactContext;
        default:
            return {};
    }
};