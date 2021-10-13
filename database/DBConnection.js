const { DATABASE_HOST, DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
});

connection.connect(error => {
    if(error) throw error;

    console.log('Connected to database');
});

module.exports = connection;
