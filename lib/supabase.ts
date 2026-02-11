
import { createClient } from '@supabase/supabase-js';

// Fungsi bantuan untuk mengakses env secara aman di berbagai environment
const getSafeEnv = (key: string): string | undefined => {
  try {
    return typeof process !== 'undefined' && process.env ? process.env[key] : undefined;
  } catch {
    return undefined;
  }
};

const supabaseUrl = getSafeEnv('SUPABASE_URL') || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = getSafeEnv('SUPABASE_ANON_KEY') || 'placeholder-key';

// Inisialisasi client dengan penanganan error
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const isSupabaseConfigured = () => {
  const url = getSafeEnv('SUPABASE_URL');
  const key = getSafeEnv('SUPABASE_ANON_KEY');
  return !!url && !!key && url !== '' && !url.includes('placeholder');
};
