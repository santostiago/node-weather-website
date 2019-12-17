const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/135f9fc77b079f534b33cdf07ebcbd16/' + latitude + ',' + longitude + '?units=si&lang=pt'
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Could not connect to the server', undefined)
        } else if (body.error) {
            callback('Could not find a value for this location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary +' Neste momento: ' + body.currently.temperature + ' graus.')
        }
    })
}

module.exports = forecast