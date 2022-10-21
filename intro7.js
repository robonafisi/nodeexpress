//Synchronous file writing

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')

console.log(first)

writeFileSync(
    './content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'}
)

const third = readFileSync('./content/result-sync.txt','utf8')

console.log(third)