console.log('Starting....')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

address = process.argv[2]

if(!address)
{
    console.log('No detect city (will use default city)')
    address = 'beijing'
}

geocode(address, (error, data) => {
    
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