console.log('Starting....')


url = 'http://api.weatherstack.com/current?access_key=c6a778a009c4e79057127d25103d6505&query=New%20York'
url_geo = 'http://api.weatherstack.com/current?access_key=c6a778a009c4e79057127d25103d6505&query=37.8267,-122.4233'

const request = require('request')

request({ url: url_geo, json: true }, (error, response) => {
    //console.log(response)
    //const data = JSON.parse(response.body)
    //console.log(data)
    //console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + ' It is currently '+
    response.body.current.temperature
    + ' degree out. It feels like '+response.body.current.feelslike+' degree out.')
})