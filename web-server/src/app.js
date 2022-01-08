const express = require('express')
const res = require('express/lib/response')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page for weather app')
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.get('/weather', (req, res) => {
    res.send("This is weather page")
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})