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

mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2VuZXJhbHp6ZCIsImEiOiJja3k1YWp0dm8wazduMzFwZmR1NWdpcmh3In0.Rd0ZvMDKGwWkT6ywTJYcLg&limit=1';

request({url: mapbox_url, json:true}, (error, response) =>{
    console.log(response.body.features[0].text)
    x = response.body.features[0].geometry.coordinates[0]
    y = response.body.features[0].geometry.coordinates[1]
    console.log(x+"|"+y)
})