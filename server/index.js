const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "expense_tracker",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connection successful");
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/expenses", (req, res) => {
  const { name, amount, category, date } = req.body;

  const sql =
    "INSERT INTO expenses (name, amount, category, date) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, amount, category, date], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to save expense" });
    } else {
      res.status(201).json({ message: "Expense saved!", id: result.insertId });
    }
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

app.get("/expenses", (req, res) => {
  const sql = "SELECT * FROM expenses ORDER BY date DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch expenses" });
    } else {
      res.json(results);
    }
  });
});
