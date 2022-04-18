const express = require(`express`)
const path = require('path');

//adicional
const { json } = require('body-parser')
const cors = require('cors')
//end

const mongoose = require(`mongoose`)

const server = express()

const port = 4001

server.use(json())
server.use(cors())

// server.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, src, 'index.html'))
// })

server.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"))
})

async function main() {
    await mongoose.connect('mongodb+srv://luanmarcal:LuanMiguel@lm-labs.mjhnf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    server.listen(port, ()=>{
        console.log(`o servidor está rodando em ${port}`)
    })
}

main().catch(err => console.log(err));