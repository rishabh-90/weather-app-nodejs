const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const weather = require('./weather/weather');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to be used for',
        string: true
    }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`Current Address is ${result.address}`);
        weather.getWeather(result.lat, result.long, (errorWeather, resultWeather) => {
            if (errorWeather) {
                console.log(errorWeather);
            } else {
                console.log(`Current Temparature is ${resultWeather.Current}. It feels like ${resultWeather.aptTem}`);
            }
        });
    }
});

