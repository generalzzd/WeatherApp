const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + encodeURIComponent(address)
        + '.json?access_token=pk.eyJ1IjoiZ2VuZXJhbHp6ZCIsImEiOiJja3k1YWp0dm8wazduMzFwZmR1NWdpcmh3In0.Rd0ZvMDKGwWkT6ywTJYcLg&limit=1';

    request({ url: url, json: true, timeout: 5000}, (error, response) => {
        if (error) {
            callback('Unable to connect to geo service! (net error)')
        } else if (response.body.features.length <= 0) {
            callback('Unable to geo find location')
        } else {

            var latitude = response.body.features[0].geometry.coordinates[0]
            var longitude = response.body.features[0].geometry.coordinates[1]
            var place_name = response.body.features[0].place_name
            callback(undefined, {
                y:latitude,
                x:longitude,
                location:place_name
            })
        }
    })
}

module.exports = geocode