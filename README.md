<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1n5X2Pc6Z_NsFQ3B038kZDxnRAdniPKMB

## Run Locally

**Prerequisites:**  Node.js 18+

### Setup Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Get your credentials:
   - **Supabase URL & Anon Key**: From your Supabase project settings
   - **Gemini API Key**: From [Google AI Studio](https://aistudio.google.com)

3. Update `.env.local` with your credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Running the App

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment Notes

- **Vercel**: Add your environment variables in the Vercel dashboard under Project Settings → Environment Variables
- **Netlify**: Add your environment variables in Site Settings → Build & Deploy → Environment

Make sure to prefix all environment variables with `VITE_` for them to be accessible in the client-side code.
