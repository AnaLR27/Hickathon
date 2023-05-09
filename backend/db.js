//conexion postgres
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "",
  password: "",
  database: "hicron",
  port: "5432",
});

module.exports = pool;
