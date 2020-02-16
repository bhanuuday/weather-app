const request = require('request')


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYmhhbnU4OTk5IiwiYSI6ImNrNmd4azBvdjA4ZXEzb3A4emM4cnBmZXkifQ.IiOaJr-8WxabUb5ZiOSDJQ&limit=1"
    request({url: url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find the location. Try another search.')
        } else {
            const latitude = body.features[0].center[0]
            const longitude = body.features[0].center[1]
            const location = body.features[0].place_name

            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                location: location
            })
        }
    })
}

module.exports = geocode