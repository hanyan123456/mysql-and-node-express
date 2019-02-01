const mysql = require('mysql');


/**
 *
 * 连接 mysql 数据库
 * @returns
 */
function createConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'bfj123456',
        database: 'school'
    });
    return connection;
}

module.exports = {
    createConnection
};