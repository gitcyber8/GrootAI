"use client";

import { useState } from "react";
import axios from "axios";

type Message = {
  role: string;
  content: string;
};

export default function AICopilot() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<
    Message[]
  >([
    {
      role: "assistant",

      content:
        "Hello. I am your AI Infrastructure Copilot.",
    },
  ]);

  async function sendMessage() {
    if (!input) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat",
        {
          message: input,
        }
      );

      const aiMessage = {
        role: "assistant",
        content: res.data.reply,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {
      console.log(error);
    }

    setInput("");
  }

  return (
    <div className="glass rounded-3xl p-6 h-175 flex flex-col border border-cyan-500/20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

        <h2 className="text-3xl font-bold">
          AI Infrastructure Copilot
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`
              p-4 rounded-2xl max-w-[85%]

              ${
                msg.role === "user"
                  ? "ml-auto bg-cyan-500/20 text-cyan-100"
                  : "bg-indigo-500/20 text-slate-100"
              }
            `}
          >
            <p className="leading-7 whitespace-pre-wrap">
              {msg.content}
            </p>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="mt-6 flex gap-3">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }

          placeholder="Ask AI about infrastructure..."

          className="
            flex-1
            bg-black/30
            border border-white/10
            rounded-2xl
            px-4
            py-3
            outline-none
            text-white
          "
        />

        <button
          onClick={sendMessage}
          className="
            px-6
            rounded-2xl
            bg-cyan-500
            hover:bg-cyan-400
            transition-all
            font-semibold
          "
        >
          Send
        </button>
      </div>
    </div>
  );
}