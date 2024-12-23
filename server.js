const express = require('express');
const {createServer} = require('http');
const { Server } = require('socket.io')
const {SerialPort, ReadlineParser} = require('serialport');
const path = require('path');



const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, 'public')))

const port = new SerialPort({
    path: '/dev/ttyACM0',
    baudRate: 9600
})

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));



app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html')
    res.sendFile(filePath)
})



io.on("connect", (socket) => {
    console.log("connected")
})


parser.on('data', function(data){
    io.emit('data', data)
})


server.listen(3000)


