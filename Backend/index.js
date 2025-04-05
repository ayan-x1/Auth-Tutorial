import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./Routes/auth.Routes.js";

dotenv.config();


// Connect to MongoDB database
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello Healthy World!');
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port:', PORT);
})
