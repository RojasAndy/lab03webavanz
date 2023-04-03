const express = require('express')
const port = 3500
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/mylife', (req, res) => {
    res.sendFile('./arquitectura.png', {
        root: __dirname 
    })
})

app.get('/user', (req, res)=> {
    res.json({
        nombre: "Jorge",
        apellido:"Castaneda",
        edad: 42,
        points: [1, 2, 3],
        address: {
            ciudad: "Lima - Peru",
            distrito: "San Miguel",
            calle: "Av. Brigida Silva"
        }
    })
})

app.get('/isAlive', (req, res)=> {
    res.sendStatus(204)
})

app.listen(port)
console.log(`Server on port ${port}`)