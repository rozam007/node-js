const EventEmitter = require('events')
const http = require('http')


const myEmitter = new EventEmitter();


myEmitter.on('rozam', () => {
    console.log('this is rozam')
})


myEmitter.emit('rozam')









const server = http.createServer();

server.on('request', (req, res)=>{
    res.end('request received')
})


server.on('request', (req, res)=>{
    console.log('another request received')
})


server.on('close', (req, res)=>{
    console.log('server closed');
})


server.listen(8000, '127.0.0.1', () => {
    console.log('server is listening at port 8000');
})

