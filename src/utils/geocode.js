const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FudG9zdGlhZ28iLCJhIjoiY2szenE0Y25rMDcxbjNmcXVuY241NDJ3ZCJ9.BuE4Qkgx1LgSSqBd6viZ4A'
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to locations services', undefined)
        } else if(body.features.length === 0) {
            callback('Could not find the location provided', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode