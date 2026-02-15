
import { GoogleGenAI } from "@google/genai";

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
  private ai: GoogleGenAI | null = null;

  private getAI() {
    if (this.ai) return this.ai;
    const apiKey = getApiKey();
    if (!apiKey) return null;
    this.ai = new GoogleGenAI({ apiKey });
    return this.ai;
  }

  async chat(message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[] = []) {
    try {
      const client = this.getAI();
      if (!client) {
        return "Halo! Maaf, kunci API AI belum dikonfigurasi. Namun, Anda tetap bisa melihat-lihat layanan kami atau menghubungi tim via WhatsApp.";
      }

      const response = await client.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "Maaf, saya sedang mengalami kendala teknis. Silakan hubungi tim RSA Studio langsung.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Mohon maaf, terjadi kesalahan saat menghubungi asisten AI kami. Silakan coba sesaat lagi.";
    }
  }
}

export const geminiService = new GeminiService();
