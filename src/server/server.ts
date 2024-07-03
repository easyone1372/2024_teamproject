import express, { Request, Response } from "express";
import mysql, { QueryError } from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";

// Express 애플리케이션 설정
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const dbConfig = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "6428",
  database: "mealkit",
  timezone: "Z", // 'Z'는 UTC 시간대를 의미
});

dbConfig.connect((err: QueryError | null) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL server.");
});

app.get("/infoPage", (res: Response, req: Request) => {
  const query = `SELECT 
      si.storeId, 
      si.storeName, 
      si.storeStar, 
      si.storeLocation, 
      si.storeCall, 
      si.mealMainImg, 
      si.mealSubImg,
      soh.dayOfWeek,
      soh.openTime,
      soh.closeTime
    FROM storeInfo si
    JOIN storeOperatingHours soh ON si.storeId = soh.storeId`;
  dbConfig.query(query, (err: QueryError | null, result: any) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
