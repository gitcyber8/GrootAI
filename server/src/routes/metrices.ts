import express from "express";

const router = express.Router();

router.get("/", async (_req, res) => {

  const metrics = {

    cpu: Math.floor(Math.random() * 40) + 40,

    memory: Math.floor(Math.random() * 30) + 50,

    network: Math.floor(Math.random() * 500) + 200,

    api: Math.floor(Math.random() * 3000) + 1000,

    latency: Math.floor(Math.random() * 100) + 20,

    updatedAt: new Date().toLocaleTimeString(),

  };

  res.json(metrics);

});

export default router;