const path = require('path')
const express = require('express')
const res = require('express/lib/response')

const app = express()
const public_dir = path.join(__dirname, '../public')
console.log('Using static directory: '+ public_dir)

app.use(express.static(public_dir))

app.get('/weather', (req, res) => {
    res.send({
        forecast:"50 degree",
        location: "Beijing"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})