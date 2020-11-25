const express = require('express')
const mongoose = require('mongoose')
const path = require("path")
const cors = require('cors')

const app = express();
app.use(cors())


//protocolos http e websocket
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box)
    })
})

mongoose.connect('mongodb+srv://admin:admin@cluster0.wtfcj.mongodb.net/dropbox?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use((req, res, next) => {
    req.io = io;

    return next()
})


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

//definição do web socket + http
server.listen(3333)