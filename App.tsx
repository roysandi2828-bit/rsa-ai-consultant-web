
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import { logDiagnostics, checkSupabaseConnection } from './lib/diagnostics';

console.log('[v0] App component loading...');
console.log('[v0] Supabase configured:', isSupabaseConfigured());
logDiagnostics();

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    console.log('[v0] App component mounted successfully');
    checkSupabaseConnection();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const leadData = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      created_at: new Date().toISOString()
    };

    try {
      if (isSupabaseConfigured()) {
        // Simpan ke Supabase jika tersedia
        const { error } = await supabase.from('leads').insert([leadData]);
        if (error) throw error;
      } else {
        // Fallback: Simpan ke LocalStorage agar user tetap bisa "mencoba" fitur ini
        console.warn('Supabase not configured. Saving to localStorage instead.');
        const existingLeads = JSON.parse(localStorage.getItem('rsa_leads') || '[]');
        existingLeads.push(leadData);
        localStorage.setItem('rsa_leads', JSON.stringify(existingLeads));
        
        // Beri sedikit delay untuk simulasi loading
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error saving lead:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="relative selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      
      <Testimonials />
      
      <Pricing />
      
      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto glass-effect rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-16 shadow-2xl border border-white/5">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Mari Mulai <span className="gradient-text">Proyek Anda</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Punya pertanyaan atau siap untuk membangun website impian bersama <span className="text-white font-medium">RSA Studio</span>? Tim kami siap berdiskusi 24/7.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email Kami</div>
                    <div className="font-bold">halo@rsastudio.id</div>
                  </div>
                </div>
                <a 
                  href="https://wa.me/6281399855043?text=Halo%20RSA%20Studio%2C%20saya%20ingin%20mendiskusikan%20project%20website%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.023c.09-.457.133-.923.133-1.393 0-.14-.006-.279-.017-.417C4.161 15.688 3 13.978 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">WhatsApp</div>
                    <div className="font-bold">+62 813 9985 5043</div>
                  </div>
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center py-10 animate-in zoom-in-95 duration-500 text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-400">Data Anda telah diterima. {!isSupabaseConfigured() && "(Mode Demo: Disimpan di Lokal)"}</p>
                </div>
              ) : formStatus === 'error' ? (
                <div className="h-full flex flex-col items-center justify-center py-10 text-red-400 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Terjadi Kesalahan</h3>
                  <p>Gagal mengirim pesan. Silakan coba lagi nanti atau hubungi via WhatsApp.</p>
                </div>
              ) : (
                <>
                  <input name="full_name" type="text" required placeholder="Nama Lengkap" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white" />
                  <input name="email" type="email" required placeholder="Email Bisnis" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white" />
                  <select name="service" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-gray-400 cursor-pointer">
                    <option value="" className="bg-[#0b0f19]">Pilih Layanan</option>
                    <option value="Landing Page" className="bg-[#0b0f19]">Landing Page</option>
                    <option value="Company Profile" className="bg-[#0b0f19]">Company Profile</option>
                    <option value="E-Commerce" className="bg-[#0b0f19]">E-Commerce</option>
                    <option value="Custom System" className="bg-[#0b0f19]">Custom System</option>
                  </select>
                  <textarea name="message" required placeholder="Ceritakan Proyek Anda" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none text-white"></textarea>
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/30 active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <span>Kirim Pesan Sekarang</span>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <AIConsultant />
    </div>
  );
};

export default App;
