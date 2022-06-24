const request = require('request')

const forecast = (latitude, longitude, callback)  => {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ latitude + ',' + longitude + '?key=EKZ3PA59MF8RN26KPXU9V9EBZ&unitGroup=metric' 

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.length === 63){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, body.days[0].description + ' It is currently ' + body.currentConditions.temp + ' degrees out. The high today is ' + body.days[0].tempmax + ' with a low of ' + body.days[0].tempmin + '. There is a ' + body.days[0].precipprob + '% chance of rain. ')

        }
    })
}

module.exports = forecast