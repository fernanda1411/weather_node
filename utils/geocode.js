const request = require('request')



// Geocoding
// Address -> Lat/Long -> Weather

const geocode = (address, callback) => {
    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmVybmFuZGExNDExIiwiYSI6ImNrNzJndHJ2ZTAwZzMzZW55eTQ1YXFzOTEifQ.GU83m-AerS5aUTshcqxzNA'

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!')
        } else if(response.body.features.length === 0){
            callback('Unable to find a location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode