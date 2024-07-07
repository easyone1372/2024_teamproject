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
      stores.name, 
      stores.rating, 
      stores.address, 
      stores.phone,
      storeImages.imageUrl 
    FROM stores
    LEFT JOIN storeImages ON stores.storeId = storeImages.storeId
    WHERE stores.storeId = ?;
  `;
  dbConfig.query(query, [storeId], (err: QueryError | null, result: any) => {
    if (err) {
      console.error("상점 정보 조회 중 오류 발생:", err);
      res.status(500).json({ error: "내부 서버 오류" });
      return;
    }
    res.json(result[0]);
  });
});

app.get("/api/infoMenu/:storeId", (req: Request, res: Response) => {
  const { storeId } = req.params;
  const query = `
      SELECT 
        menus.name as kitName, 
        GROUP_CONCAT(menuIngredients.ingredient SEPARATOR ', ') AS kitIngredient, 
        inventory.quantity as kitCount
      FROM menus
      LEFT JOIN menuIngredients ON menus.menuId = menuIngredients.menuId
      LEFT JOIN inventory ON menus.menuId = inventory.menuId
      LEFT JOIN storeMenus ON menus.menuId = storeMenus.menuId
      WHERE storeMenus.storeId = ?
      GROUP BY menus.name, inventory.quantity;
  `;
  dbConfig.query(query, [storeId], (err: QueryError | null, result: any) => {
    if (err) {
      console.error("메뉴 정보 조회 중 오류 발생:", err);
      res.status(500).json({ error: "내부 서버 오류" });
      return;
    }
    res.json(result);
  });
});

app.get("/api/infoTime/:storeId", (req: Request, res: Response) => {
  const { storeId } = req.params;
  const query = `
    SELECT
      storeDayOfWeek,
      openTime,
      closeTime,
      isClosed
    FROM storeHours
    WHERE storeId = ?;
  `;
  dbConfig.query(query, [storeId], (err: QueryError | null, result: any) => {
    if (err) {
      console.error("영업 시간 정보 조회 중 오류 발생", err);
      res.status(500).json({ error: "내부 서버 오류" });
      return;
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
