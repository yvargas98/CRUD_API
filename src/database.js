const { Pool } = require('pg');
require('dotenv').config();

const connection = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        sslmode: 'require',
        rejectUnauthorized: false
    }
};

const pool = new Pool(connection);
module.exports = () => { return pool; }

