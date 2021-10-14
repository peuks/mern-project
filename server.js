import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// import userRoutes from "./Routes/userRoutes.js";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

/**
 * .env file configuration
 */
dotenv.config({ path: "./config/.env" });

/**
 * Connected to the Mango Database
 */
connectDB();

/**
 * Lanch the app
 */
const app = express();

app.use(express.json());
/**
 * Routes
 */
app.use("/api/users", userRoutes);

app.use("/api/post", postRoutes);

/**
 * Server
 */
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
