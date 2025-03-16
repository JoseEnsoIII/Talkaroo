import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPaperPlane, FaRobot } from 'react-icons/fa';

const ChatContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const MessagesContainer = styled.div`
  height: 60vh;
  padding: 1.5rem;
  overflow-y: auto;
  background: #f8fafc;
`;

const MessageBubble = styled.div`
  max-width: 70%;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: ${props => props.isAI ? '#ffffff' : '#6366f1'};
  color: ${props => props.isAI ? '#1e293b' : 'white'};
  align-self: ${props => props.isAI ? 'flex-start' : 'flex-end'};
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  display: flex;
  gap: 0.75rem;
  position: relative;
  margin-left: ${props => props.isAI ? '0' : 'auto'};
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    ${props => props.isAI ? 
      `left: -20px; border-right-color: #ffffff;` : 
      `right: -20px; border-left-color: #6366f1;`}
    top: 15px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1.5rem;
  background: white;
  border-top: 1px solid #e2e8f0;
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  margin-right: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`;

const SendButton = styled.button`
  background: #6366f1;
  color: white;
  border: none;
  padding: 0 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #4f46e5;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const BotIcon = styled.div`
  color: #6366f1;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const newMessage = { text: inputText, isAI: false };
    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        text: "Thank you for your message. I'm processing your request...", 
        isAI: true 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <ChatContainer>
      <Header>
        <FaRobot size="24" />
        <h1>AI Assistant</h1>
      </Header>

      <MessagesContainer>
        {messages.map((msg, index) => (
          <MessageBubble key={index} isAI={msg.isAI}>
            {msg.isAI && <BotIcon><FaRobot /></BotIcon>}
            {msg.text}
          </MessageBubble>
        ))}
      </MessagesContainer>

      <InputContainer>
        <Input 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message here..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <SendButton className='button' onClick={handleSend}>
          <FaPaperPlane />
          Send
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatApp;