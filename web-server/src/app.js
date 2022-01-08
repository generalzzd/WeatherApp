const express = require('express')
const res = require('express/lib/response')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Zidi',
        age: 29
    }])
})

app.get('/about', (req, res) => {
    res.send("<h2>This is about page</h2>")
})

app.get('/weather', (req, res) => {
    res.send({
        forecast:"50 degree",
        location: "Beijing"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})