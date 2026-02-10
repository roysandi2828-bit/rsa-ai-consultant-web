
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jmquwuqpprspkudybbja.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptcXV3dXFwcHJzcGt1ZHliYmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MTAwMjMsImV4cCI6MjA4NjI4NjAyM30.nNBUpKMBFoF7ZcT539wsxbCTCvSke0U2Wn3-wN1rlvg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
