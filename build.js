import {readdir, readFile, writeFile} from 'fs/promises'
import {minify} from "uglify-js";

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
        await Promise.all(${JSON.stringify(components)}
            .map(async it => app.component('v:' + it, await component('./components/' + it + '.vue'))));
        app.mount(document.body);
    });
`;

const bundle = minify(files);
await writeFile('index.js', bundle.code, 'utf-8');



