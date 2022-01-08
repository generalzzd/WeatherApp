console.log('Starting....')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('boston', (error, data) => {
    
    if(error){
        console.log('Error', error)
    }else {
        console.log('Data', data)
        forecast(data.x,data.y, (error, data) => {
            if(console.error())
                return console.log('Error', error)
            console.log('Data', data)
        })
    }


})




console.log('System shutdown')