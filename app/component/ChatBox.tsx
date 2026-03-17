"use client";

import { useState } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
     const res = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: input }),
});

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      const botMessage: Message = { role: "bot", text: data.reply || "Sorry, no response" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage: Message = { role: "bot", text: "Oops! Something went wrong." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white rounded-xl shadow-lg ring-1 ring-black/10 overflow-hidden flex flex-col">
      <div className="px-4 py-3 font-bold bg-[#0b2b55] text-white">Roofing Assistant</div>

      <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[70%] ${
                msg.role === "user" ? "bg-[#ff7a1a] text-white" : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-500 italic">Bot is typing...</div>}
      </div>

      <div className="flex border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-3 py-2 outline-none"
          placeholder="Ask about roof repairs, inspections..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="px-4 bg-[#ff7a1a] text-white font-semibold"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}