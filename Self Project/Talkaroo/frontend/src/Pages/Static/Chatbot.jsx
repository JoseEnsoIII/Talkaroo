import { useState } from "react";
import axios from "axios";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi! How can I help?" }]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newMessages,
        },
        {
          headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` },
        }
      );

      const botReply = response.data.choices[0].message;
      setMessages([...newMessages, botReply]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { role: "assistant", content: "Error: Unable to connect." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white shadow-xl rounded-lg p-4 fixed bottom-16 right-6 border border-gray-300">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-60 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 rounded-lg text-sm ${msg.role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black"}`}>
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t pt-2 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-l-md outline-none text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
