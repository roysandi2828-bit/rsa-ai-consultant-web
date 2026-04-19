
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    title: "Website Professional",
    description: "Website profesional yang dirancang khusus untuk meningkatkan konversi kampanye marketing dan membangun kredibilitas bisnis Anda.",
    icon: "🎯"
  },
  {
    title: "Company Profile",
    description: "Website profesional untuk membangun kredibilitas dan mempresentasikan identitas bisnis Anda di mata dunia.",
    icon: "🏢"
  },
  {
    title: "E-Commerce",
    description: "Sistem toko online lengkap dengan manajemen stok, integrasi payment gateway, dan perhitungan ongkir.",
    icon: "🛍️"
  },
  {
    title: "Custom System",
    description: "Pengembangan sistem manajemen, ERP, atau dashboard khusus sesuai alur bisnis perusahaan Anda.",
    icon: "⚙️"
  },
  {
    title: "UI/UX Design",
    description: "Desain antarmuka modern yang mengutamakan pengalaman pengguna terbaik dan estetika premium.",
    icon: "✨"
  },
  {
    title: "SEO Optimization",
    description: "Optimasi website agar muncul di halaman pertama Google dan mendatangkan trafik organik berkelanjutan.",
    icon: "📈"
  }
];

const Services: React.FC = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-[#0d1321]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('servicesTitle')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('servicesDescription')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl glass-effect hover:bg-blue-600/10 transition-all border border-white/5 hover:border-blue-500/50 flex flex-col h-full shadow-lg">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{item.description}</p>
              <div className="pt-6 border-t border-white/10">
                <button 
                  onClick={scrollToContact}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl font-bold transition-all duration-300 active:scale-95"
                >
                  Konsultasi Sekarang &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
