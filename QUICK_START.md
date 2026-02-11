# Quick Start Guide

Langsung ke intinya! Follow langkah-langkah ini untuk buat website RSA Studio running.

## 5 Menit Setup

### 1. Get Your Credentials (2 menit)

**Supabase:**
- Go to https://app.supabase.com
- Click your project
- Settings → API
- Copy `Project URL` and `anon public` key

**Gemini API:**
- Go to https://aistudio.google.com/app/apikey
- Click "Get API key"
- Copy the key

### 2. Setup Local Environment (1 menit)

```bash
# Clone/navigate to project
cd rsa-ai-consultant-web

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local with your credentials
nano .env.local  # or use your editor
```

**.env.local should look like:**
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_GEMINI_API_KEY=your_gemini_key_here
```

### 3. Run Locally (2 menit)

```bash
npm run dev
```

Open http://localhost:3000 in your browser. ✓ Done!

## Deploy to Vercel (3 clicks)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Setup RSA Studio with env vars"
   git push
   ```

2. **On Vercel Dashboard**
   - Settings → Environment Variables
   - Add 3 variables (copy from .env.local)
   - Redeploy or push again

3. **Done!** ✓

## Deploy to Netlify (4 clicks)

1. **Push to GitHub** (same as above)

2. **On Netlify Dashboard**
   - Site settings → Build & Deploy → Environment
   - Add 3 variables (copy from .env.local)
   - Save

3. **Deploy!** (auto triggers on repo push)

4. **Done!** ✓

## If Something Goes Wrong

### Blank Page / Bad Gateway?

1. **Check Console (F12)**
   - Look for any red errors
   - Search for `[v0]` in console

2. **Verify Environment Variables**
   ```javascript
   // In browser console:
   import.meta.env.VITE_SUPABASE_URL // should print your URL
   ```

3. **Check Deployment Logs**
   - Vercel: Deployments → Logs
   - Netlify: Deploys → Deploy log

4. **Still stuck?**
   - Read `DEPLOYMENT_GUIDE.md` for detailed troubleshooting
   - Check `README.md` for more info

## What's New (Fixed)

- ✓ Environment variables now properly configured
- ✓ Error boundary untuk catch errors
- ✓ Debug logging untuk easier troubleshooting
- ✓ Supabase integration fixed
- ✓ Gemini AI integration working
- ✓ Vercel & Netlify configs ready

## Key Files

- `vite.config.ts` - Build configuration
- `.env.local` - Your secret credentials
- `.env.example` - Template (safe to share)
- `DEPLOYMENT_GUIDE.md` - Full troubleshooting guide
- `README.md` - Complete documentation

## Questions?

- Check logs in browser console (F12)
- Look at deployment logs in Vercel/Netlify
- Read DEPLOYMENT_GUIDE.md for step-by-step help

Happy coding! 🚀
