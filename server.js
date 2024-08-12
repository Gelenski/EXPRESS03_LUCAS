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
  password: "QL0P4TDcQGB2R97Djet7vXYHggatTZE4",
  database: "nodejs_tasks",
});

// Testar conexão
connection.connect((error) => {
  if (error) {
    console.log("Erro na conexão ao MySQL: " + error.message);
    return;
  }
  console.log("Conexão bem-sucedida.");
});
