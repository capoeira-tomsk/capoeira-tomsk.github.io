import {readdir, readFile, writeFile} from 'fs/promises'
import {minify} from "uglify-js";

const files = {};
for (const file of ['node_modules/vue/dist/vue.global.js',]) {
    files[file] = await readFile(file, 'utf-8');
}

const templates = (await readdir('templates')).map(it => it.replace(/\.\w*$/, ''));

files['main.js'] = /*language=JavaScript*/ `

    async function template(url) {
        const result = await fetch(url);
        if (!result.ok) throw Object.assign(new Error(result.statusText + ' ' + url), {result});
        return {template: await result.text()};
    }

    window.addEventListener('load', async () => {
        const app = Vue.createApp({});
        await Promise.all(${JSON.stringify(templates)}.map(async it => app.component('v:' + it, await template('./templates/' + it + '.vue'))));
        app.mount(document.body);
    });
`;

const bundle = minify(files);
await writeFile('index.js', bundle.code, 'utf-8');



