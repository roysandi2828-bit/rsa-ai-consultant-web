
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const plans = [
  {
    name: "Starter",
    description: "Cocok untuk UMKM atau Personal Branding",
    features: ["Single Page Design", "Responsive Layout", "Basic SEO", "Free Domain 1 Thn", "Hosting Starter", "WA Chat Button"],
    isPopular: false
  },
  {
    name: "Business",
    description: "Solusi Profesional untuk Perusahaan Menengah",
    features: ["Up to 10 Pages", "Premium Design", "Contact Form Integration", "Google Maps", "Social Media Integration", "Performance Optimized"],
    isPopular: true
  },
  {
    name: "Enterprise",
    description: "Sistem Kompleks & E-Commerce Skala Besar",
    features: ["Unlimited Pages", "E-Commerce System", "Inventory Mgmt", "Priority Support", "Advanced Security", "Custom Email"],
    isPopular: false
  }
];

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const handleSelect = (planName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#0d1321]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('pricingTitle')}</h2>
          <p className="text-gray-400">{t('pricingDescription')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${plan.isPopular ? 'border-blue-500 bg-blue-500/5 shadow-2xl shadow-blue-500/10 scale-105 z-10' : 'border-white/10 glass-effect opacity-90'}`}>
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  {t('pricingMostPopular')}
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-widest">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-white">Custom Quote</span>
              </div>
              <p className="text-sm text-gray-500 mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-gray-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleSelect(plan.name)}
                className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${plan.isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25' : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}
              >
                Konsultasikan Paket {plan.name}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">Butuh solusi yang lebih spesifik? <a href="#contact" className="text-blue-400 font-bold hover:underline">Hubungi kami langsung</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
