const express = require("express");
const mysql = require("mysql2");

const app = express();

app.listen(3000, () => {
  console.log("[SERVER]: running on port 3000.");
});

// Conexão com o BD
const connection = mysql.createConnection({
  host: "localhost",
  user: "user_bd_tasks",
});
