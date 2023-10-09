const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "orderowl.jpkit.us",
    user: "", //???
    password: "", // ??
    database: "", //??
    connectionLimit: 50,
    //waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0
    //debug: false,
});

const promisePool = pool.promise();
module.exports = promisePool;
