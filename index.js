import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DB from "./routes.js/database.js"
import { userRouter } from "./routes.js/authentication.js";
import { moviesRoute } from "./routes.js/movieRoute.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

DB();
app.use(userRouter)
app.use(moviesRoute)


app.get("/", (req, res) => {
    console.log("Hello world");
})

app.listen(process.env.PORT, () => console.log("PORT running on", process.env.PORT));