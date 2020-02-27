const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const forecastCallback = (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
}

const geoCodeCallback = (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

    forecast(data.latitude, data.longitude, forecastCallback)
}

geocode('Boston', geoCodeCallback)



