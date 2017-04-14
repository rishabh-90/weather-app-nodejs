const request = require('request');

var getWeather = (lat, long, callback) => {

    request({
        url: `https://api.darksky.net/forecast/e90e1a6dbd26dccce5182cffd1310420/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect');
        }
        else if (response.statusCode == 200) {
            callback(undefined, {
                Current: body.currently.temperature,
                aptTem: body.currently.apparentTemperature,
            })
        } else {
            callback('No result Found');
        }
    });

};

module.exports = {
    getWeather
};