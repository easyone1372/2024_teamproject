import bodyParser from "body-parser";
import { QueryError } from "mysql2";

const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "6428",
  database: "mealkit",
  timezone: "Z", // 'Z'는 UTC 시간대를 의미
});

connection.connect((err: QueryError | null) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL server.");
});

app.get("/infoPage", (res: any, req: any) => {
  const query = `SELECT storeName, storeStar, storeLocation, storeCall, mealMainImg, storeOpenDay, mealSubImg FROM storeInfo`;
  connection.query(query, (err: any, results: any) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
