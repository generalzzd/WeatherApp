console.log('Starting....')

setTimeout(() => {
    console.log('haha')
}, 2000);

url = 'http://api.weatherstack.com/current?access_key=c6a778a009c4e79057127d25103d6505&query=New%20York'
url_geo = 'http://api.weatherstack.com/current?access_key=c6a778a009c4e79057127d25103d6505&query=&units=f'

const request = require('request')

request({ url: url_geo, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service! (net error)')
    }else if(response.body.error)
    {
        console.log('Unable to find location')
    }else{
        console.log(response.body.current.weather_descriptions[0] + ' It is currently '+
        response.body.current.temperature
        + ' degree out. It feels like '+response.body.current.feelslike+' degree out.')
    }
})

mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/123wgat.json?access_token=pk.eyJ1IjoiZ2VuZXJhbHp6ZCIsImEiOiJja3k1YWp0dm8wazduMzFwZmR1NWdpcmh3In0.Rd0ZvMDKGwWkT6ywTJYcLg&limit=1';

request({url: mapbox_url, json:true}, (error, response) =>{
    if (error) {
        console.log('Unable to connect to weather service! (net error)')
    } else if (response.body.features.length <= 0) {
        console.log('Unable to find location')
    } else {

        var latitude = response.body.features[0].geometry.coordinates[0]
        var longitude = response.body.features[0].geometry.coordinates[1]
        console.log(latitude + "|" + longitude)
    }
})