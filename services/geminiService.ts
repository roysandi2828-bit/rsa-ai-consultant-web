
import { GoogleGenerativeAI } from "@google/generative-ai";

const getApiKey = () => {
  return import.meta.env.VITE_GEMINI_API_KEY || '';
};

const SYSTEM_INSTRUCTION = `Anda adalah asisten konsultan proyek ahli untuk "RSA Studio", sebuah agensi pembuatan website premium terkemuka di Indonesia. 
Tujuan Anda adalah membantu calon klien memahami layanan kami dan memberikan solusi yang dipersonalisasi.

Layanan kami meliputi:
1. Landing Page Profesional - Fokus pada konversi tinggi untuk kampanye marketing.
2. Website Company Profile - Fokus pada kredibilitas dan identitas brand yang kuat.
3. E-commerce / Toko Online - Fokus pada fungsionalitas jualan, manajemen stok, dan integrasi pembayaran.
4. Sistem Informasi Kustom - Fokus pada efisiensi alur kerja bisnis yang spesifik.

PENTING: Jangan menyebutkan nominal harga atau angka pasti. Katakan bahwa harga bersifat kustom tergantung pada kompleksitas kebutuhan klien.
Berikan jawaban yang ramah, profesional, dan persuasif dalam Bahasa Indonesia. 
Arahkan mereka untuk mengisi formulir kontak di bawah halaman atau menghubungi via WhatsApp jika mereka ingin mendapatkan penawaran resmi dari RSA Studio.`;

export class GeminiService {
  private genAI: GoogleGenerativeAI | null = null;

  private getGenAI() {
    if (this.genAI) return this.genAI;
    const apiKey = getApiKey();
    if (!apiKey) return null;
    this.genAI = new GoogleGenerativeAI(apiKey);
    return this.genAI;
  }

  async chat(message: string, history: Array<{ role: 'user' | 'model'; parts: { text: string }[] }> = []) {
    try {
      const genAI = this.getGenAI();
      if (!genAI) {
        return "Halo! Maaf, kunci API AI belum dikonfigurasi. Namun, Anda tetap bisa melihat-lihat layanan kami atau menghubungi tim via WhatsApp.";
      }

      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: SYSTEM_INSTRUCTION
      });

      const contents = history.map(h => ({
        role: h.role === 'model' ? 'model' : 'user',
        parts: h.parts
      })).concat([{
        role: 'user' as const,
        parts: [{ text: message }]
      }]);

      const result = await model.generateContent({
        contents: contents,
        generationConfig: {
          temperature: 0.5,
          topP: 0.9,
          topK: 40,
          maxOutputTokens: 500,
        }
      });

      const response = await result.response;
      return response.text() || "Maaf, saya sedang mengalami kendala teknis. Silakan hubungi tim RSA Studio langsung.";
    } catch (error) {
      console.error("[v0] Gemini Error:", error);
      return "Mohon maaf, terjadi kesalahan saat menghubungi asisten AI kami. Silakan coba sesaat lagi.";
    }
  }
}

export const geminiService = new GeminiService();
