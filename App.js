import express from "express";
import HelloRoutes from "./Hello";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
const app = express()
app.use(cors()); 
UserRoutes(app);  


app.use(express.json());
 
HelloRoutes(app);

Lab5(app);
app.listen(process.env.PORT ,4000);