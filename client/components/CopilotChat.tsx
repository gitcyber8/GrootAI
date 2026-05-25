"use client";

import { useState } from "react";

export default function CopilotChat() {
  const [messages, setMessages] = useState<any[]>([
    {
      role: "ai",
      content:
        "Groot AI Copilot online. Ask about incidents, infrastructure, or remediation workflows.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] =
    useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentInput = input;

    setInput("");

    setLoading(true);

    try {
      const response = await fetch(
        "https://grootai.onrender.com/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: currentInput,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "AI Copilot failed to respond.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="glass rounded-3xl p-5 h-125 flex flex-col">

      <div className="mb-4">
        <p className="text-cyan-400 text-sm">
          GROOT AI
        </p>

        <h2 className="text-2xl font-bold">
          Infrastructure Copilot
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`
                max-w-[80%]
                rounded-2xl
                p-4
                whitespace-pre-wrap

                ${
                  message.role === "user"
                    ? "bg-cyan-500 text-black"
                    : "bg-black/30 border border-white/10"
                }
              `}
            >
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-cyan-400 animate-pulse">
            Groot AI analyzing telemetry...
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-3">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask Groot AI..."
          className="
            flex-1
            bg-black/30
            border border-white/10
            rounded-2xl
            px-4 py-3
            outline-none
          "
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            px-5 py-3
            rounded-2xl
            bg-cyan-500
            hover:bg-cyan-400
            transition-all duration-300
            font-semibold
            text-black
          "
        >
          Send
        </button>
      </div>
    </div>
  );
}