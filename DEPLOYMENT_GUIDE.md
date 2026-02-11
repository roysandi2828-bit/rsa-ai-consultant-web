# Deployment Guide - RSA Studio

Panduan lengkap untuk fix blank page/bad gateway dan deploy dengan sukses.

## Masalah yang Sudah Diperbaiki

### 1. Missing Environment Variables Configuration
- ✓ Updated `vite.config.ts` untuk properly define VITE_* environment variables
- ✓ Updated `lib/supabase.ts` untuk menggunakan `import.meta.env` (Vite API yang benar)
- ✓ Updated `services/geminiService.ts` untuk menggunakan env vars dengan cara yang benar

### 2. Missing Types File
- ✓ Created `types/index.ts` dengan ChatMessage interface

### 3. Error Handling
- ✓ Created `components/ErrorBoundary.tsx` untuk catch errors
- ✓ Added debug logging ke `index.tsx` dan `App.tsx`
- ✓ Created `lib/diagnostics.ts` untuk troubleshooting

### 4. HTML & Build Configuration
- ✓ Fixed `index.html` - menghapus importmap CDN yang tidak kompatibel
- ✓ Updated `vite.config.ts` dengan konfigurasi yang benar
- ✓ Updated `package.json` dengan missing TypeScript types

## Deployment Steps

### Option 1: Deploy ke Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Fix: environment variables and blank page issue"
   git push
   ```

2. **Di Vercel Dashboard**
   - Go to Project Settings → Environment Variables
   - Add these variables:
     ```
     VITE_SUPABASE_URL = https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY = your_anon_key_here
     VITE_GEMINI_API_KEY = your_gemini_api_key_here
     ```
   - Trigger redeploy (atau push baru ke repo)

3. **Verify**
   - Check deployment logs: Deployments → Logs
   - Open DevTools Console (F12) dan cari `[v0]` log messages
   - Lihat Diagnostics di console untuk verify semua setup

### Option 2: Deploy ke Netlify

1. **Connect Repository**
   - Go to netlify.com → Add new site from Git
   - Select your GitHub repo

2. **Set Environment Variables**
   - Site settings → Build & Deploy → Environment
   - Add variables:
     ```
     VITE_SUPABASE_URL = https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY = your_anon_key_here
     VITE_GEMINI_API_KEY = your_gemini_api_key_here
     ```

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (netlify.toml sudah mengatur ini otomatis)

4. **Trigger Deploy**
   - Push to repo atau redeploy dari Netlify dashboard

## Troubleshooting

### Blank Page / Bad Gateway

**Step 1: Check Browser Console (F12)**
```
Open DevTools → Console tab
Look for error messages like:
- [v0] App starting...
- [v0] Root element found, mounting app...
- [v0] App mounted successfully
```

**Step 2: Check Environment Variables**
Di console, jalankan:
```javascript
console.log(import.meta.env.VITE_SUPABASE_URL)
console.log(import.meta.env.VITE_GEMINI_API_KEY)
```
Harusnya menampilkan values, bukan `undefined`.

**Step 3: Check Network Tab**
- DevTools → Network tab
- Refresh halaman
- Lihat apakah ada file yang gagal load (status 404)
- Cek size dist folder: `npm run build && du -sh dist`

**Step 4: Local Testing**
```bash
npm install
npm run dev
# Buka http://localhost:3000 dan cek console
```

**Step 5: Check Deployment Logs**
- **Vercel**: Deployments → Select deployment → Logs
- **Netlify**: Deploys → Select deploy → Deploy log

### Form Tidak Bisa Dikirim

**Check 1: Supabase Connection**
```javascript
// Di console:
fetch('https://your-project.supabase.co/rest/v1/', {
  headers: { 'apikey': 'your_anon_key' }
})
.then(r => console.log('Status:', r.status))
```

**Check 2: Database Schema**
Di Supabase dashboard:
- Go to SQL Editor
- Create table jika belum ada:
```sql
CREATE TABLE leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### AI Chat Tidak Responsif

**Check: Gemini API Key**
```javascript
console.log('API Key set:', !!import.meta.env.VITE_GEMINI_API_KEY)
```

Jika tidak set, form tetap bisa dikirim tapi chat akan show fallback message.

## Environment Variables Reference

| Variable | Source | Required |
|----------|--------|----------|
| `VITE_SUPABASE_URL` | Supabase Settings > API | Yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase Settings > API | Yes |
| `VITE_GEMINI_API_KEY` | Google AI Studio | Optional (but recommended) |

### Cara Dapatkan Credentials

**Supabase:**
1. Go to https://app.supabase.com
2. Select your project
3. Go to Settings > API
4. Copy `Project URL` → `VITE_SUPABASE_URL`
5. Copy `anon public` → `VITE_SUPABASE_ANON_KEY`

**Gemini:**
1. Go to https://aistudio.google.com/app/apikey
2. Click "Get API key"
3. Copy key → `VITE_GEMINI_API_KEY`

## Files Changed/Added

- ✓ `vite.config.ts` - Environment variables configuration
- ✓ `lib/supabase.ts` - Supabase client using Vite API
- ✓ `services/geminiService.ts` - Gemini service fixed
- ✓ `index.tsx` - Added ErrorBoundary dan debugging
- ✓ `App.tsx` - Added diagnostics
- ✓ `index.html` - Fixed module loading
- ✓ `components/ErrorBoundary.tsx` - NEW: Error handling
- ✓ `types/index.ts` - NEW: TypeScript types
- ✓ `lib/diagnostics.ts` - NEW: Debugging utilities
- ✓ `package.json` - Added TypeScript type definitions
- ✓ `vercel.json` - NEW: Vercel configuration
- ✓ `netlify.toml` - NEW: Netlify configuration
- ✓ `README.md` - Updated dengan troubleshooting guide
- ✓ `DEPLOYMENT_GUIDE.md` - THIS FILE

## Next Steps

1. **Local Testing**: `npm install && npm run dev`
2. **Push to GitHub**: Commit dan push semua changes
3. **Set Environment Variables**: Di Vercel/Netlify dashboard
4. **Check Logs**: Verify deployment berhasil
5. **Test Live**: Buka deployed URL, buka Console (F12), cek untuk `[v0]` logs

Good luck! 🚀
