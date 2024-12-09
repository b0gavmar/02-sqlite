import express from "express";
import cors from "cors";
import { initDB } from "./database.js";
import usersRouter from "./routes/users.js";
import { readFile } from "fs/promises";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const startServer = async () => {
    await initDB();
    app.listen(3000, () => console.log("Server is running on port 3000"));
};

startServer();