const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');

const componentName = process.argv[2];
const ComponentName = uppercamelcase(componentName);
const componentPath = path.resolve(__dirname, '../src/componets', componentName);
const files = [
    {fileName: 'index.ts', content: 'content of index.ts'},
    {fileName: `${ComponentName}.tsx`, content: 'your component template'},
    {fileName: `__test__/${ComponentName}.test.ts`, content: 'content of test file'}
];

files.forEach(file => {
    fileSave(path.join(componentPath, file.fileName))
        .writer(file.content, 'utf8')
        .end('\n');
})