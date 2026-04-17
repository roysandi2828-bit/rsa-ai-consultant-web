
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110 shadow-lg shadow-blue-500/20 text-white">R</div>
          <span className="text-2xl font-extrabold tracking-tight text-white">RSA <span className="text-blue-500">Studio</span></span>
        </a>
        
        <div className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors">{t('navBeranda')}</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors">{t('navLayanan')}</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="hover:text-white transition-colors">{t('navPortfolio')}</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="hover:text-white transition-colors">{t('navPaket')}</a>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border-l border-white/20 pl-4 md:pl-6 ml-2 md:ml-4">
          <button
            onClick={() => setLanguage('id')}
            className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold transition-all ${
              language === 'id'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            ID
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold transition-all ${
              language === 'en'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>

        <button 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-500/20 active:scale-95"
        >
          {t('navKonsultasi')}
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white p-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
