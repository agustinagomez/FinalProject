import cors from "cors";
import dotenv from "dotenv"
import express from "express";
import router from "./routes/index";
import "./database/index"
dotenv.config()


const { PORT, HOST } = process.env
const corsOptions = {
    origin: HOST,
    optionsSuccessStatus: 200
}
const app = express()

app.use("/", cors(corsOptions), router)

app.listen(PORT, () => {
    console.log(`Server Started in http://localhost:${PORT}`);
});