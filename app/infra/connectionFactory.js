var mysql  = require('mysql');

var connectMYSQL = function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node'
    });
}

module.exports = function() {
    return connectMYSQL;
}