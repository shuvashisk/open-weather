const request = require('request-promise');

const API_KEY = 'f6a923bbe75573d8f38c54eb27b2299b';

class weather {
    static retriveByCity(city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then((res) => {
            callback(res);
        }).catch((err) => {
            console.log(err);
            callback({error: 'could not connect to openweatherapi'});
        });
    }
}

module.exports = weather;