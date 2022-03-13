import {readdir, readFile, writeFile} from 'fs/promises'
import {minify} from "uglify-js";
import cpy from "cpy";

(async function js() {
    const files = {};
    for (const file of [
        'node_modules/vue/dist/vue.global.js',
        'js/component.js',
    ]) {
        files[file] = await readFile(file, 'utf-8');
    }

    const components = (await readdir('components')).map(it => it.replace(/\.\w*$/, ''));

    files['main.js'] = /*language=JavaScript*/ `
        window.addEventListener('load', async () => {
            const app = Vue.createApp({});
            Promise.all(${JSON.stringify(components)}
                .map(it => component('components/' + it + '.vue')
                    .then(r => app.component('v:' + it, r)))
            ).then(() => app.mount(document.body));
        });
    `;

    const bundle = minify(files);
    await writeFile('index.js', bundle.code, 'utf-8');
})();

(async function copy() {
    cpy('node_modules/font-awesome/css/*', 'css', {flat: true});
    cpy('node_modules/font-awesome/fonts/*', 'fonts', {flat: true});
})();



