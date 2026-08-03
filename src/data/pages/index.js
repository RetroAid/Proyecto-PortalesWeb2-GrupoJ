import indexContext from './index_page.js';

export default (page) => {
    switch (page) {
        case '/':
        case '/index.html':
            return indexContext;
        default:
            return {};
    }
};

