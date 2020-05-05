0. :Inspirational:  
   https://youtu.be/Fcr-gM-QThc
   https://code-maze.com/angular-material-navigation/

1. mkdir Server:
   touch app.js
   npm init -y
   npm i mongoose express cors

2. [Server]  App.js:  
require("./data-access-layer/dal");
const express = require("express");
const cors = require("cors");
const dishesController = require("./controllers/");
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/dishes", dishesController);
server.listen(3000, () => console.log("Listening on http://localhost:3000"));

3. dal.js:

031. {MONGO} 
const mongoose = require("mongoose");
function connectAsync() {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://localhost:27017/<dbName>",
            { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(db);
            });
    });
}
async function connectToDatabase() {
    try {
        const db = await connectAsync();
        console.log("We're connected to " + db.name + " database on MongoDB");
    }
    catch (err) {
        console.error(err);
    }
}
connectToDatabase();

032. {SQL}:
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "q1w2e3",
  database: "tourist"
});
connection.connect(err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("We're connected to Tourist on MySQL.");
});
function executeAsync(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
module.exports = {
  executeAsync
};

4. buisness-logic/dish-logic.js:
const dal = require("../dal");
async function getAllVacsAsync() {
  const sql = `SELECT vacationID,description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations`;
  const vacs = await dal.executeAsync(sql);
  return vacs;
}
async function getOneVacAsync(id) {
  const sql = `SELECT vacationID,description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations WHERE vacationID = ${id}`;
  const user = await dal.executeAsync(sql);
  return user;
}
async function addVacAsync(vac) {
  const sql = `INSERT INTO vacations (description, destination, picFileName, startDate, endDate, price, followed) VALUES('${vac.description}','${vac.destination}','${vac.picFileName}','${vac.startDate}','${vac.endDate}','${vac.price}', 0)`;
  const info = await dal.executeAsync(sql);
  vac.id = info.insertId;
  return vac;
}
async function updateFullVacationAsync(vac) {
  const sql = `
      UPDATE vacations SET
      description = '${vac.description}',
      destination = '${vac.destination}',
      picFileName = '${vac.picFileName}',
      startDate = '${vac.startDate}',
      endDate = '${vac.endDate}',
      price = '${vac.price}'
      WHERE vacationID = ${vac.id}`;
  const info = await dal.executeAsync(sql);
  return info.affectedRows === 0 ? null : vac;
}
async function updatePartialVacAsync(vac) {
  let sql = "UPDATE vacations SET ";
  if (vac.description) {
    sql += `description = '${vac.description}',`;
  }
  if (vac.destination) {
    sql += `destination = '${vac.destination}',`;
  }
  if (vac.picFileName) {
    sql += `picFileName = '${vac.picFileName}',`;
  }
  if (vac.startDate) {
    sql += `startDate = '${vac.startDate}',`;
  }
  if (vac.endDate) {
    sql += `endDate = '${vac.endDate}',`;
  }
  if (vac.price) {
    sql += `price = '${vac.price}',`;
  }
  sql = sql.substr(0, sql.length - 1);
  sql += ` WHERE ProductID = ${vac.id}`;
  const info = await dal.executeAsync(sql);
  return info.affectedRows === 0 ? null : vac;
}
async function deleteOneVacAsync(id) {
  const sql = `DELETE FROM vacations WHERE vacationID = ${id}`;
  await dal.executeAsync(sql);
}
module.exports = {
  getAllVacsAsync,
  getOneVacAsync,
  addVacAsync,
  updateFullVacationAsync,
  updatePartialVacAsync,
  deleteOneVacAsync
};

5. controller/dish-logic.js:
const express = require("express");
const vacsLogic = require("../database/vacations-logic");
const router = express.Router();
// GET http://localhost:3000/api/vacations
router.get("/vacations", async (request, response) => {
  try {
    const vacs = await vacsLogic.getAllVacsAsync();
    response.json(vacs);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET http://localhost:3000/api/vacations/1
router.get("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const vac = await vacsLogic.getOneVacAsync(id);
    response.json(vac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
router.post("/vacations", async (request, response) => {
  try {
    const vac = request.body;
    const addedVac = await vacsLogic.addVacAsync(vac);
    response.status(201).json(addedVac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
router.delete("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const vac = await vacsLogic.deleteOneVacAsync(id);
    response.json(vac);
  } catch (err) {
    response.status(200);
  }
});
module.exports = router;
_
---**---
_

[Client] ng new client --routing

1.  DI - Dependency Injection
    זהו מצב בו הסביבה עצמה (אנגולר) יוצרת עבורנו אובייקט
    ואנו מקבלים אותו מוכן.
    יתרונות:
    שימוש חוזר באותו האובייקט
    מניעת הצורך ליצור אותו בעצמנו
    בדיקות - המערכת יכולה ליצור עבורנו אובייקטים כאלו ועוד
    משמעות השם:
    Dependency - כי ה-Component שלנו תלוי באובייקט הזה.
    Injection - כי זה נחשב שהמערכת יוצרת את האוביקט
    ו"מזריקה" אותו אלינו ל-Component.

2.  [ROUTE] guide:  
    const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductsComponent },
    { path: "products/new", component: InsertComponent },
    { path: "products/:prodID", component: DetailsComponent },
    { path: "about", component: AboutComponent },
    // { path: "admin", loadChildren: "./admin/admin.module#AdminModule" }, // Lazy Loading
    { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) }, // Lazy Loading
    { path: "", redirectTo: "/home", pathMatch: "full" }, // full = exact
    { path: "**", component: PageNotFoundComponent }
    ];
    ng g s services/getBooks --skipTests

3.  Theme up components  
    ng g c components/layouts/layout --skipTests
    ng g c components/layouts/header --skipTests
    ng g c components/layouts/main --skipTests
    ng g c components/layouts/sidebar --skipTests
    ng g c components/layouts/footer --skipTests
    ng g c components/pages/home --skipTests
    ng g c components/pages/restaurants --skipTests
    ng g c components/pages/about --skipTests
    ng g c components/pages/contact --skipTests
    ng g c components/pages/auth --skipTests
    ng g c components/pages/auth/login --skipTests
    ng g c components/pages/auth/logout --skipTests
    ng g c components/pages/auth/register --skipTests

npm i --save @angular/material @angular/cdk

<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

cd app/ mkdir redux

3. directive guide:

4. Service guide - fetch + calculate:  
   include HttpClientModule along with import on app.ts
   npm i rxjs

\_
   --------------------[PROJECT]

3. [REDUX] info:
   ארכיטקטורה המנהלת מידע ברמת האפליקציה והמאפשרת להחזיק את המידע במקום אחד. המידע נקרא ב-AppState.
   כל אזור באפליקציה שרוצה לשלוח מידע ל-AppState יכול לבצע זאת.
   כל אזור באפליקציה שרוצה לקבל עדכונים מה-AppState יכול לבצע זאת.
   המונחים החשובים:
   A. AppState - המידע הקיים בכל האפליקציה.
   B. ActionType - סוג הפעולה הניתנת לביצוע (Enum). לדוגמה: עדכון כל המוצרים מהשרת. לדוגמה: הוספת מוצר חדש. לדוגמה: מחיקת מוצר.
   C. Payload (מטען) -
   המידע עצמו שאנו משתמשים בו בביצוע פעולה. לוגמה: כל המוצרים. לדוגמה: מוצר בודד: לדוגמה: קוד מוצר. אבל, לא בהכרח חובה לשלוח Payload.
   D. Action - תאור פעולה לביצוע - מכיל שני דברים: א. ActionType - איזו פעולה אנו רוצים לבצע. ב. Payload - מה המידע הקשור לפעולה.
   E. Reducer - פונקציה שמבצעת את כל הפעולות.
   חוק: אסור ל-Reducer לשנות את ה-AppState המקורי שנשלח אליו. הוא חייב לייצר AppState חדש, לשנות אותו ולהחזיר אותו.
   F. Store - האובייקט שמנהל הכל. מכיר גם את ה-AppState (מכיל אותו) ומכיר גם את ה-Reducer (מפעיל אותו).
   G. Dispatch - שליחת Action ל-Store לביצוע.
   H. Subscribe - האזנה לשינויים שהתבצעו ב-Store.
   התקנת Redux:
   npm i redux

4. touch action-type.ts:  
   export enum ActionType {GetAllBooks}

5. touch action.ts:
   import { ActionType } from './action-type';
   export interface Action {
   type: ActionType;
   payload?: any; // Optional!
   }

6. touch app-state:
   import { BookModel } from '../models/book-model';
   export class AppState {
   public books: BookModel[];
   public constructor() {
   this.books = [];
   }
   }

7. touch reducer.ts:
   import { AppState } from './app-state';
   import { Action } from './action';
   import { ActionType } from './action-types';
   export function reducer
   (oldAppState: AppState, action: Action): AppState {
   const newAppState = { ...oldAppState };
   // Spread Operator
   switch(action.type) {
   case ActionType.GetAllBooks:
   newAppState.books = action.payload;
   break;
   }
   return newAppState;
   }

8. touch store.ts:
   npm i redux
   import { createStore } from "redux";
   import { reducer } from './reducer';
   import { AppState } from './app-state';
   export const store = createStore(reducer, new AppState())

9. {assignments}:
LAZY LOAD
REDUX
RXJS
DIRECTIVE
SERVICES

7. Questions for Assaf / other:  
   **in angular, redux- how to unsubscribe?
   **global variable import in angular client such as port
