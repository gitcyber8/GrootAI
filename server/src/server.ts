import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoutes from "./routes/chat";
import incidentsRoutes from "./routes/incidents";
import metricsRoutes from "./routes/metrices"

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Groot AI Backend Running");
});

app.use("/api/chat", chatRoutes);

app.use("/api/incidents", incidentsRoutes);
app.use("/api/metrices",metricsRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});