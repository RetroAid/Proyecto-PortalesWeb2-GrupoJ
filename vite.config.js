import { defineConfig } from "vite";
import path, { resolve } from 'node:path';
import * as glob from "glob";

import HtmlCssPurgePlugin from 'vite-plugin-purgecss';
import HandlebarPlugin from 'vite-plugin-handlebars';

import getPageContext from './src/data/pages/index';

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
        ).map((file) => {
            return [
                file.slice(0, file.length - path.extname(file).length),
                resolve(__dirname, file)
            ];
        })
    );
}

export default defineConfig({
    appType: 'mpa',
    base: "/Proyecto-PortalesWeb2-GrupoJ/",
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
