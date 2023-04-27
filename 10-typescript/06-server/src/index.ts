import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { router as routerController } from "./controllers/decorators/controller";
import "./controllers/LoginController";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["eren"] }));
app.use(router);
app.use(routerController);

app.listen(3000, () => console.log("Server is listening on port 3000"));
