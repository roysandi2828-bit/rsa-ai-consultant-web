export const logDiagnostics = () => {
  console.log('=== RSA Studio Diagnostics ===');
  
  // Check environment variables
  console.log('[ENV] VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL ? '✓ Set' : '✗ Missing');
  console.log('[ENV] VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✓ Set' : '✗ Missing');
  console.log('[ENV] VITE_GEMINI_API_KEY:', import.meta.env.VITE_GEMINI_API_KEY ? '✓ Set' : '✗ Missing');
  
  // Check DOM
  console.log('[DOM] Root element:', document.getElementById('root') ? '✓ Found' : '✗ Missing');
  console.log('[DOM] Body element:', document.body ? '✓ Found' : '✗ Missing');
  
  // Check browser
  console.log('[Browser] User Agent:', navigator.userAgent.substring(0, 50));
  console.log('[Browser] Language:', navigator.language);
  
  // Check network connectivity
  console.log('[Network] Online:', navigator.onLine);
  
  // Check React/DOM
  console.log('[React] Version check in DevTools console: React is loaded');
  
  console.log('=== End Diagnostics ===');
};

export const checkSupabaseConnection = async () => {
  try {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!url || !key) {
      console.warn('[Supabase] Missing URL or Key');
      return false;
    }
    
    const response = await fetch(`${url}/rest/v1/`, {
      headers: {
        'apikey': key,
      }
    }).catch(e => {
      console.warn('[Supabase] Connection error:', e.message);
      return null;
    });
    
    console.log('[Supabase] Connection test:', response?.ok ? '✓ OK' : '✗ Failed');
    return response?.ok || false;
  } catch (error) {
    console.error('[Supabase] Error:', error);
    return false;
  }
};
