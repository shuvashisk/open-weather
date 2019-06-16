const db = require('../database');

class Cities {

    static retriveAll(callback){
        db.query('select city_name from cities',(err, res) => {
            if (err.error)
                return callback(err.error);
            callback(res);
        });
    }
    static insert(city, callback){
        db.query('insert into cities (city_name) values($1)', [city], (err, res) =>{
            if(err.error)
                return callback(err.error);
            callback(res);
        });
    }
}

module.exports = Cities;