import { Pool } from 'pg';

const CONNECTION_STRING = process.env.DATABASE_URL || 
'postgresql://postgres:nepal2@localhost:5432/open_weather_db';


class Database {

    constructor(){
        this._pool = new Pool({
            connectionString: CONNECTION_STRING,
            ssl: SSL
        });
    
    this._pool.on('error',(err,client) =>{

        console.error('Unexpected error on idle postgres client',err);
        process.exit(1);
    });

}
    query(){
        this._pool.connect((err,client, done) => {
            if(err) throw err;
            const params = args.length === 2 ? args[0]:[];
            const callback = args.length === 1 ? args[0]: args[1];

            client.query(query,params,(err,res) => {
                done();
                if(err){
                    console.log(err.stack);
                    return callback({error: 'DB error.'}, null);
                }
                callback({}, res.rows);
            });
            });
    }
    end (){
        this._pool.end();
    }
}

module.exports = new Database();