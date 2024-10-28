import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost:3306",
  user: "root",
  password: "root",
  database: "pbkk-js",
});

export default pool;
