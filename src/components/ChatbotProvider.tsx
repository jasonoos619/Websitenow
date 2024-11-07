import React, { createContext, useContext, ReactNode } from 'react';
import Chatbot from './Chatbot';

const ChatbotContext = createContext<{ isOpen: boolean; setIsOpen: (open: boolean) => void }>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useChatbot = () => useContext(ChatbotContext);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ChatbotContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      <Chatbot />
    </ChatbotContext.Provider>
  );
}