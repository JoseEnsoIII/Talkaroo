import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  max-width: 90%;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const ChatHeader = styled.div`
  background: #4a90e2;
  color: white;
  padding: 10px;
  font-weight: bold;
  text-align: center;
`;

const ChatBody = styled.div`
  padding: 10px;
  height: 300px;
  overflow-y: auto;
`;

const ChatInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  outline: none;
  margin-bottom: 5px;
`;

const SendButton = styled.button`
  background: #6c5ce7;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  margin-top: 5px;

  &:hover {
    background: #4a90e2;
  }
`;

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: transparent;
  border: 1px solid black;
  padding: 0;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", content: input };
    setMessages([...messages, userMessage]);

    setInput("");

    try {
      const response = await axios.post("http://localhost:5001/api/chat", {
        message: input,
        
      });

      const botMessage = { type: "bot", content: response.data.reply };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error);
    }
  };

  return (
    <>
      <ChatButton onClick={() => setOpen(!open)}>
        <img src="/images/talkaroo.png" alt="Chat Icon" />
      </ChatButton>

      <ChatContainer open={open}>
        <ChatHeader>Talkaroo Chatbot</ChatHeader>
        <ChatBody>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{ textAlign: msg.type === "user" ? "right" : "left" }}
            >
              <p>
                <strong>{msg.type === "user" ? "You" : "Bot"}:</strong>{" "}
                {msg.content}
              </p>
            </div>
          ))}
        </ChatBody>
        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <SendButton onClick={sendMessage}>Send</SendButton>
        </ChatInputContainer>
      </ChatContainer>
    </>
  );
};

export default FloatingChatbot;
