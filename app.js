const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const forecastCallback = (error, data) => {
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Data', data)
    }
}

const geoCodeCallback = (error, data) => {
    if (error) {
     console.log('Error', error)
    } else {
        console.log('Data', data)
        forecast(data.latitude, data.longitude, forecastCallback)
    }
}

geocode('Boston', geoCodeCallback)



