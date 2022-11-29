const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/subfolder/test.txt', 'utf8');
const second = readFileSync('./content/test2.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './content/new-file.txt',
    `Here is the latest result: ${first} /// ${second}`,
    { flag: 'a'}
);
