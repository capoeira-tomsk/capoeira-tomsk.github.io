import {rm} from 'fs/promises';
import cpy from "cpy";

await rm('deploy/capoeira', {recursive: true});
await cpy([
    'components',
    'css',
    'fonts',
    'ico',
    'img',
    'index.html',
    'index.js',
], 'deploy/capoeira');