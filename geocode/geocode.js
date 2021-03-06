const request = require("request")

const mpkey = process.env.mapboxkey

geocodeAddress = (address, callback) => {
    request({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mpkey}`,
        json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Mapbox servers.')
        } else if (body.features.length < 1) {
            callback('Unable to find that address.')
        } else {
            callback(undefined, {
                address: body.features[0].place_name,
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0]
            })
        };
    });
}

module.exports = {geocodeAddress}