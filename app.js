console.log('Starting....')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

})

forecast(40.7831,-73.9712, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


console.log('System shutdown')