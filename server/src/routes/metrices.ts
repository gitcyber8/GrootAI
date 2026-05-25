import express from "express";

const router = express.Router();

router.get("/", (req, res) => {

  const telemetry = {

    cpu:
      Math.floor(Math.random() * 40) + 40,

    memory:
      Math.floor(Math.random() * 30) + 50,

    network:
      Math.floor(Math.random() * 500) + 300,

    api:
      Math.floor(Math.random() * 2000) + 1000,

    latency:
      Math.floor(Math.random() * 100) + 20,

    updatedAt:
      new Date().toLocaleTimeString(),

  };

  res.json(telemetry);

});

export default router;