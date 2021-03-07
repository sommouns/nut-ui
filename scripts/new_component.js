const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');

const componentName = process.argv[2];
const ComponentName = uppercamelcase(componentName);
const componentPath = path.resolve(
    __dirname,
    '../src/components',
    componentName
);
const files = [
    {
        fileName: 'index.ts',
        content: 
`import ${ComponentName} from './${ComponentName}';
export default ${ComponentName};
        `,
    },
    {
        fileName: `${ComponentName}.tsx`,
        content: 
`import React from 'react';

const ${ComponentName}: React.FC = () => {
    return (
        <button>${ComponentName}</button>
    )
}

export default ${ComponentName};
        `,
    },
    {
        fileName: `__test__/${ComponentName}.test.ts`,
        content: '// content of test file',
    },
];

files.forEach((file) => {
    fileSave(path.join(componentPath, file.fileName))
        .write(file.content, 'utf8')
        .end('\n');
});
