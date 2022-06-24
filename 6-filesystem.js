const { readFileSync, writeFileSync} = require('fs');

//read file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

//create file

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{flag: 'a'});
