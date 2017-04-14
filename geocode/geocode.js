/**
 * Created by rishabh on 14-04-2017.
 */
const request = require('request');

var geocodeAddress = (location, callback) => {
    var encodedaddress = encodeURI(location);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
        json: true
    }, (error, response, body) => {
        //console.log(JSON.stringify(response,undefined,2));
        //console.log(body.results[0].address_components[1].long_name);
        if (error) {
            callback('Unable to connect');
        }
        else if (body.status != 'ZERO_RESULTS') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                long: body.results[0].geometry.location.lat
            })

        } else {
            callback('No result Found');
        }
    });
};

module.exports = {
    geocodeAddress
};