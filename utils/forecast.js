const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/25a8e84fb143e864991e2038572fe48b/' + latitude + ',' + longitude

    const requestCallback = (error, response) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + " % chance of rain.")
        }
    };

    request({url, json: true}, requestCallback)

}

module.exports = forecast