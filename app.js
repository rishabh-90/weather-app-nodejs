const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to be used for',
        string: true
    }
}).help().alias('help', 'h').argv;

//console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});