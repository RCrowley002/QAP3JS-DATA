const { Pool } = require("pg");

const pool = new Pool({
  user: "Ryan",
  host: "localhost",
  database: "QAP3",
  password: "batman",
  port: 5432,
});

module.exports = pool;
