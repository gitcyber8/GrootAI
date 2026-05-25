import express from "express";

const router = express.Router();

interface Incident {

  id: number;

  title: string;

  severity: string;

  status: string;

  rootCause: string;

  aiConfidence: number;

  createdAt: string;

}

let incidents: Incident[] = [];

const templates = [

  {
    title: "Container Memory Leak",
    severity: "Critical",
    status: "Detected",
    rootCause:
      "Redis memory overflow caused cache instability.",
  },

  {
    title: "Kubernetes Pod Crash",
    severity: "High",
    status: "Mitigating",
    rootCause:
      "Node pressure triggered pod eviction cascade.",
  },

  {
    title: "API Gateway Latency Spike",
    severity: "Medium",
    status: "Monitoring",
    rootCause:
      "Traffic surge overloaded edge gateway clusters.",
  },

  {
    title: "Database Replication Failure",
    severity: "Critical",
    status: "Escalated",
    rootCause:
      "Replication lag exceeded safe threshold limits.",
  },

];

function createIncident() {

  const random =
    templates[
      Math.floor(
        Math.random() *
          templates.length
      )
    ];

  const incident: Incident = {

    id: Date.now(),

    title: random.title,

    severity: random.severity,

    status: random.status,

    rootCause: random.rootCause,

    aiConfidence:
      Math.floor(Math.random() * 10) + 90,

    createdAt:
      new Date().toISOString(),

  };

  incidents.unshift(incident);

  if (incidents.length > 50) {

    incidents.pop();

  }

}

for (let i = 0; i < 5; i++) {

  createIncident();

}

setInterval(() => {

  createIncident();

}, 5000);

router.get("/", (req, res) => {

  res.json(incidents);

});

export default router;