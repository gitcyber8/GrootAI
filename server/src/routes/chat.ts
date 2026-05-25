import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

import { db } from "../db";

dotenv.config();

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",
});

router.post("/", async (req, res) => {
  try {
    const message = req.body.message;

    const incidents =
      db.data?.incidents || [];

    const latestIncidents =
      incidents.slice(-5);

    const context = latestIncidents
      .map(
        (i) => `
Title: ${i.title}
Severity: ${i.severity}
Status: ${i.status}
Analysis: ${i.aiAnalysis}
`
      )
      .join("\n");

    const completion =
      await client.chat.completions.create({
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "system",
            content: `
You are an enterprise AI Infrastructure Copilot.

Current Infrastructure State:
${context}

Instructions:
- Analyze infrastructure incidents
- Explain issues professionally
- Suggest root causes
- Suggest remediation
- Keep answers concise
`,
          },

          {
            role: "user",
            content: message,
          },
        ],
      });

    const reply =
      completion.choices[0].message.content;

    res.json({
      reply,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply:
        "AI Copilot temporarily unavailable.",
    });
  }
});

export default router;
