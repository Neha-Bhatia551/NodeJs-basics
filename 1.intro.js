 //Global - no window
 //__dirname
 //__filename
 //require
 //module
 //process

 console.log(__dirname);
 //Settimeout will wait for 1000 ms and execute the function
 setTimeout(() => console.log("Hello world!"),1000);

 //SetInterval will repeatedly execute the function every 1000 ms
 //setInterval(()=>console.log("Hello world - Interval"), 1000);

 //nodejs uses commonJs under the hood, and by default every file is a module


 //to export the keyname 
 const name = "john"

 module.exports = {name}
 console.log(module)

 //and if you want to use above module in other file , then use below code 
 //const name = require('./Intro.js')

