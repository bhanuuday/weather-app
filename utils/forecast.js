const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/77972840c7680ac850ebf223950fc77a/'+latitude+','+longitude

    request({url: url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const result = body.daily.data[0]
            callback(undefined, result)
        }
    })
}

module.exports = forecast