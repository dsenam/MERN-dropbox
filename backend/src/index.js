const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.wtfcj.mongodb.net/dropbox?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(require('./routes'))

app.listen(3333)