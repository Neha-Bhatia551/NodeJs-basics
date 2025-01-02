const {createReadStream} = require('fs')

const stream = createReadStream('./content/bi.txt', {
    highWaterMark: 90000,
    encoding: 'utf-8'
} );


//default size of stream 64 kb
// to change the default size - highWatermark
//const stream = createReadStream('./content/bi.txt', {highWaterMark: 90000});
//const stream = createReadStream('./content/bi.txt', {encoding: 'utf-8 '});
stream.on('data', (result) => {
     console.log(result);
}) 

stream.on('error', (err) => {
    console.log(err);
})