/** 
 * The event loop in Node.js is a mechanism that handles asynchronous operations. 
 * It allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded. 
 * The event loop continuously checks the call stack and the callback queue, executing tasks from the queue when the
 *  call stack is empty. - read online 
 */
//example1 
// const {readFile, read} = require('fs');

// console.log("first task ");

// readFile('./content/first.txt','utf8',(err,result) => {
//     if(err) {
//         console.log(`Error occured ${err}`);
//         return;
//     }
//     console.log(result)
//     console.log("first task completed");
// });

// console.log("End of this file");

//example2 
console.log("first")
setTimeout(() => {
    console.log("second");
},0);
console.log("third");
