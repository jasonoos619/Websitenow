import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, MinusSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase, type ChatMessage } from '@/lib/supabase';
import { useChatbot } from './ChatbotProvider';

export default function Chatbot() {
  const { isOpen, setIsOpen } = useChatbot();
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const loadInitialMessage = async () => {
      // Add welcome message to Supabase
      const { data: welcomeMessage } = await supabase
        .from('chat_messages')
        .insert([
          {
            session_id: sessionId,
            content: 'Hello! How can I help you today?',
            type: 'bot',
          },
        ])
        .select()
        .single();

      if (welcomeMessage) {
        setMessages([welcomeMessage]);
      }
    };

    loadInitialMessage();
  }, [sessionId]);

  const findAnswer = async (question: string): Promise<string> => {
    const { data: qaEntries } = await supabase
      .from('qa_entries')
      .select('*');

    if (!qaEntries) return "I'm having trouble accessing the knowledge base. Please try again later.";

    const searchTerms = question.toLowerCase().split(' ');
    
    const scoredQAs = qaEntries.map(qa => {
      let score = 0;
      
      if (qa.keywords) {
        qa.keywords.forEach(keyword => {
          if (question.toLowerCase().includes(keyword.toLowerCase())) {
            score += 3;
          }
        });
      }

      searchTerms.forEach(term => {
        if (qa.question.toLowerCase().includes(term)) {
          score += 2;
        }
        if (qa.answer.toLowerCase().includes(term)) {
          score += 1;
        }
        if (qa.category.toLowerCase().includes(term)) {
          score += 2;
        }
      });

      return { qa, score };
    });

    const bestMatches = scoredQAs
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    if (bestMatches.length > 0) {
      return bestMatches[0].qa.answer;
    }

    return "I'm not sure about that specific question. For maintenance requests, you can:\n1. Use the resident portal\n2. Call 1-800-CAROUSEL\n3. Email maintenance@carousel.com\n\nCan I help you with anything else?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message to Supabase
    const { data: userMessage } = await supabase
      .from('chat_messages')
      .insert([
        {
          session_id: sessionId,
          content: inputValue,
          type: 'user',
        },
      ])
      .select()
      .single();

    if (userMessage) {
      setMessages(prev => [...prev, userMessage]);
    }

    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking and typing
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const answer = await findAnswer(inputValue);

    // Add bot response to Supabase
    const { data: botMessage } = await supabase
      .from('chat_messages')
      .insert([
        {
          session_id: sessionId,
          content: answer,
          type: 'bot',
        },
      ])
      .select()
      .single();

    if (botMessage) {
      setMessages(prev => [...prev, botMessage]);
    }

    setIsTyping(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl transition-all duration-200 z-50",
        isMinimized ? "h-14" : "h-[600px]"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold text-gray-900">Property Assistant</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-500 hover:text-gray-700"
          >
            <MinusSquare className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="p-4 h-[472px] overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "mb-4 max-w-[80%] rounded-lg p-3 whitespace-pre-wrap",
                  message.type === 'user'
                    ? "ml-auto bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-900"
                )}
              >
                {message.content}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 text-gray-500 mb-4">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>●</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}