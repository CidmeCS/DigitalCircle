const express = require('express')
const { Pool } = require('pg')
require('dotenv').config()

const PORT = 3333

const pool = new Pool({
    connectionString: process.env.POSTGRES_REMOTO
})

console.log(`STATUS DA CONECCAO`)
console.log(pool.connect)

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})
app.get('/post.js', (req, res) => {
    res.sendFile(__dirname + '/post.js')
})

app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + '/main.js')
})

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


//list 10 recentes
app.get('/api/get/textos', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM TB01 ORDER BY col_dt DESC LIMIT 10')
        return res.status(200).send(rows)

    } catch (error) {
        return res.status(400).send(error)
    }

})

//inserir
app.post('/api/post/texto', async (req, res) => {
    console.log('recebendo...');
    const { col_texto } = req.body
    const today = new Date(Date.now());
    try {
        const newTexto = await pool.query('INSERT INTO TB01 (col_texto, col_dt) VALUES ($1, $2) RETURNING *', [col_texto, today])
        return res.status(200).send(newTexto.rows)
    } catch (error) {
        return res.status(400).send(error)
    }
})

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`),
    console.log(`http://localhost:${PORT}/index.html`)

    )

