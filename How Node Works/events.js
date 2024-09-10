const EventEmitter = require('events')


const myEmitter = new EventEmitter();


myEmitter.on('rozam', () => {
    console.log('this is rozam')
})


myEmitter.emit('rozam')

