const express = require(`express`)
const path = require('path');
const cors = require('cors')
const { json } = require('body-parser')

const jwt = require('jsonwebtoken')

const Temperature = require('./models/Temperature')

const temperatures = require('./routes/temperature')

const server = express()
const mongoose = require(`mongoose`)
const port = 4001

server.use(json())
server.use(cors())
server.use('/temperature', temperatures)
server.use(express.static('public'))

// let dummyCount = 0
// let temperatures = [];

// server.get('/', (req, res) => {
//     res.status(200).send(temperatures)
// })

server.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"))
})

server.use((req, res) => res.status(404).sendFile(path.join(__dirname, "views", "404.html")));

// server.post('/', (req, res) => {
//     const request = req.body

//     const temperatureObject = {
//         id: dummyCount += 1,
//         temperature: request.temperature
//     }
//     temperatures.push(temperatureObject)
//     res.status(201).send();
// })

// server.delete('/', (req, res) => {
//     temperatures = [];
//     res.status(200).send()
// })

// server.put('/:value', (req, res) => {
//     const value = req.params.value
//     const id = req.query.id
//     console.log(`QUERY IS ${id} AND PARAMETER IS ${value}`)
    
//     temperatures.map(temperature => {
//         if(temperature.id == id){
//             console.log(`FOUND ID ${id} CHANGING VALUE OF OBJECT`)
//             temperature.temperature = value
//         }
//     });

//     res.status(200).send()
// })

async function main() {
    await mongoose.connect('mongodb+srv://luanmarcal:LuanMiguel@lm-labs.mjhnf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    server.listen(port, () => {
        console.log(`server running on port ${port}`)
    })
}

main().catch(err => console.log(err));
