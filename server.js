import express, { json, urlencoded } from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import syncRoutes from "./routes/syncRoutes.js";

config();
const { PORT } = process.env
console.log("TEST DU PORT ", PORT)
/**
 * .env file configuration
 */

/**
 * Connected to the Mango Database
 */
connectDB();

/**
 * Lanch the app
 */
const app = express();

app.use(json());
/**
 * Routes
 */
app.get("/", (req, res) => res.status(200).json({ message: "ok" }))
app.use("/api/users", userRoutes);

app.use("/api/post", postRoutes);
app.use("/api/sync", syncRoutes);

/**
 * Server
 */
app.listen(PORT || 3000, () => {
  console.log(`Listening on port ${PORT || 3000}`);
});
app.use(json({ extended: true }));
app.use(urlencoded({ extended: true }));
app.use(cors());
