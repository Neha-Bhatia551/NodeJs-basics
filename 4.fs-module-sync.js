const {readFileSync, writeFileSync} = require('fs');
//const fs = require('fs')


const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync('./content/result-sync.txt', `The result string is ${first}, ${second}`)

//if you wish to append to file
writeFileSync('./content/result-sync.txt', `\nThis is appened string`, {flag: 'a'})  