const express = require('express')
require('dotenv').config()

const PORT = 8000


const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.get('/form.html', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})



app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + '/main.js')
})
app.get('/post.js', (req, res) => {
    res.sendFile(__dirname + '/post.js')
})



app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`),
    console.log(`http://localhost:${PORT}/index.html`)

    )

