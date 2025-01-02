 const EventsEmitter= require('events')

 const customEmitter = new EventsEmitter()

 customEmitter.on('response' , (name, age) => {
    console.log(`Data received ${name} , age = ${age}`);
})

customEmitter.on('response' , () => {
    console.log(`some other logic received here`);
})
customEmitter.emit('response', 'john', 34);