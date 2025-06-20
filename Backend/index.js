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
const __dirname = path.resolve();



app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/Frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
	});
}

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port:', PORT);
})
