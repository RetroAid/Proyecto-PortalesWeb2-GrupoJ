import { defineConfig } from "vite";
import path, { resolve } from 'node:path';
import * as glob from "glob";

<<<<<<< HEAD

=======
import HtmlCssPurgePlugin from 'vite-plugin-purgecss';
import HandlebarPlugin from 'vite-plugin-handlebars';

import getPageContext from './src/data/pages/index';
>>>>>>> 5a1d818d866f2bce2d1d302c7fff7b4b0cc01c45

function obtenerHtmlFiles() {
    return Object.fromEntries(
        glob.sync(
            './**/*.html',
            {
                ignore: [
                    './dist/**',
                    './node_modules/**'
                ]
            }
<<<<<<< HEAD
        ).map((file)=>{
            return [
                file.slice(0, file.length - path.extname(file).length), // nombre del archivo sin extensión
                resolve(__dirname, file) // full path a el archivo
            ]
=======
        ).map((file) => {
            return [
                file.slice(0, file.length - path.extname(file).length),
                resolve(__dirname, file)
            ];
>>>>>>> 5a1d818d866f2bce2d1d302c7fff7b4b0cc01c45
        })
    );
}

<<<<<<< HEAD
export default defineConfig(
    {
        appType: 'mpa',
        base: process.env.DEPLOY_BASE_URL ?? '/',
        build: {
            rolldownOptions: {
                input: obtenerHtmlFiles()
            }
        }
    }
);
=======
export default defineConfig({
    appType: 'mpa',
    build: {
        rollupOptions: {
            input: obtenerHtmlFiles()
        }
    },
    plugins: [
        HandlebarPlugin({
            partialDirectory: resolve(__dirname, 'src/partials'),
            context: (page) => {
                console.log(`Cargando contexto de: ${page}`);
                let context = getPageContext(page);
                return context;
            }
        }),
        HtmlCssPurgePlugin()
    ]
});
>>>>>>> 5a1d818d866f2bce2d1d302c7fff7b4b0cc01c45
