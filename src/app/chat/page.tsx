"use client";

import { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Admin", text: "Hello! How can I help you?" },
    { id: 2, sender: "User", text: "I have a query regarding my order." },
  ]);

  return (
    <div className="p-6 bg-white rounded shadow-md w-full h-full">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      <div className="border p-4 h-96 overflow-y-auto bg-gray-100 rounded">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 p-2 rounded ${msg.sender === "Admin" ? "bg-blue-200" : "bg-green-200"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;