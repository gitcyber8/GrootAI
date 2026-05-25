import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const metrics = {
      uptime: "99.98%",
      incidents: 24,
      resolved: 21,
      active: 3,
      mttr: "18m",
      cpu: Math.floor(Math.random() * 40) + 40,
      memory: Math.floor(Math.random() * 30) + 50,
      latency: Math.floor(Math.random() * 100) + 100,
    };

    res.json(metrics);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch metrics",
    });
  }
});

export default router;