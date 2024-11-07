import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ChatMessage {
  id: string;
  session_id: string;
  content: string;
  type: 'user' | 'bot';
  created_at: string;
}

export interface QAEntry {
  id: number;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  created_at: string;
}