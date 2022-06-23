const request = require('request')

const geocode = (address, callback)  => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=cb2af4401dacc284cfa73e59f3b97c5f&query=' + encodeURIComponent(address)

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location service!')
        }else if(body.data === undefined){
            callback('Unable to find location. Try another search', undefined)
        }else{
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label                
            })

        }
    })
}

module.exports = geocode