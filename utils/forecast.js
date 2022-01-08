const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=c6a778a009c4e79057127d25103d6505&query='
        + encodeURIComponent(latitude) + ','
        + encodeURIComponent(longitude) + '&units=f'
    request({ url: url, json: true, timeout: 5000 }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service! (net error)')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                weather: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                location: response.body.location.name
            })
        }
    })

}

module.exports = forecast
