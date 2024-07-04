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
  password: "0000",
  database: "meal_kit_store",
  timezone: "Z",
});

dbConfig.connect((err: QueryError | null) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL server.");
});

// app.get("/api/infoPage", (req: Request, res: Response) => {
//   const query = ``;
//   dbConfig.query(query, (err: QueryError | null, result: any) => {
//     if (err) {
//       console.error("Error executing the query:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     res.json(result);
//   });
// });

// app.get("/api/infoMenu", (req: Request, res: Response) => {
//   const query = `
//      `;
//   dbConfig.query(query, (err: QueryError | null, result: any) => {
//     if (err) {
//       console.error("Error executing the query infoMenu:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     res.json(result);
//   });
// });

app.get("/api/infoPage/:storeId", (req: Request, res: Response) => {
  const { storeId } = req.params;
  const query = `
    SELECT 
      Stores.name AS storeName, 
      Stores.rating AS storeRating, 
      StoreImages.image_url AS mainImageUrl, 
      Stores.address AS storeAddress, 
      Stores.phone AS storePhone
    FROM Stores
    LEFT JOIN StoreImages ON Stores.store_id = StoreImages.store_id
    WHERE Stores.store_id = ?;
  `;
  dbConfig.query(query, [storeId], (err: QueryError | null, result: any) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(result[0]);
  });
});

app.get("/api/infoMenu", (req: Request, res: Response) => {
  const query = `
    SELECT 
      Menus.name AS kitName, 
      GROUP_CONCAT(MenuIngredients.ingredient SEPARATOR ', ') AS kitIngredient, 
      Inventory.quantity AS kitCount
    FROM Menus
    LEFT JOIN MenuIngredients ON Menus.menu_id = MenuIngredients.menu_id
    LEFT JOIN Inventory ON Menus.menu_id = Inventory.menu_id
    GROUP BY Menus.name, Inventory.quantity;
  `;
  dbConfig.query(query, (err: QueryError | null, result: any) => {
    if (err) {
      console.error("Error executing the query infoMenu:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(result);
  });
});

app.get("/api/infoTime/:storeId", (req: Request, res: Response) => {
  const { storeId } = req.params;
  const query = `
    SELECT
      day_of_week,
      open_time,
      close_time,
      is_closed
    FROM StoreHours
    WHERE store_id = ?;
  `;
  dbConfig.query(query, [storeId], (err: QueryError | null, result: any) => {
    if (err) {
      console.error("영업 시간 정보 조회 중 오류 발생", err);
      res.status(500).json({ error: "내부 서버 오류" });
      return;
    }
    res.json(result[0]);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
