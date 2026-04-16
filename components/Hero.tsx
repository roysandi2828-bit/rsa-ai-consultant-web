
import React, { useRef, useEffect } from 'react';
import { TypewriterText } from './TypewriterText';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force video play for iOS and other devices
      video.muted = true; // Ensure muted for autoplay
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('[v0] Video playing successfully');
          })
          .catch((error) => {
            console.log('[v0] Video autoplay prevented:', error);
            // Fallback: try playing on user interaction
            const playOnInteraction = () => {
              video.play().catch(() => {});
              document.removeEventListener('click', playOnInteraction);
            };
            document.addEventListener('click', playOnInteraction);
          });
      }
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          zIndex: 0, 
          WebkitPlaysinline: 'true' as any,
          WebkitUserSelect: 'none' as any
        }}
        controlsList="nodownload"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay for Darkening */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" style={{ zIndex: 2 }}></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" style={{ zIndex: 2 }}></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-center lg:pt-0">

          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-effect border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide animate-float">
              🚀 {t('heroSubtitle')}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              {t('heroTitle')} <TypewriterText words={t('heroTypewriterWords').split('|')} className="gradient-text" />
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              {t('heroDescription')}
            </p>

            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-500/25 active:scale-95 text-center"
              >
                Mulai Proyek
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="w-full sm:w-auto px-10 py-4 glass-effect hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all border border-white/20 active:scale-95 text-center"
              >
                Lihat Portfolio
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-6 opacity-60 grayscale hover:grayscale-0 transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Trusted By:</span>
              <div className="flex space-x-4">
                <img src="https://picsum.photos/80/30?grayscale&random=1" alt="Partner" className="h-6" />
                <img src="https://picsum.photos/80/30?grayscale&random=2" alt="Partner" className="h-6" />
                <img src="https://picsum.photos/80/30?grayscale&random=3" alt="Partner" className="h-6" />
              </div>
            </div>
          </div>

          {/* Right Column: Animated Illustration */}
          <div className="order-1 lg:order-2 relative group flex justify-center lg:justify-end px-4 md:px-0">
            {/* Background Glow with Dynamic Animation */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl rounded-full group-hover:from-blue-600/30 group-hover:via-purple-600/30 group-hover:to-pink-600/30 transition-all duration-500 animate-pulse"></div>

            <div className="relative z-10 w-full max-w-md lg:max-w-2xl">
              {/* Main Illustration Container with Floating Animation */}
              <style>{`
                @keyframes floating {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  25% { transform: translateY(-15px) rotate(1deg); }
                  50% { transform: translateY(-30px) rotate(0deg); }
                  75% { transform: translateY(-15px) rotate(-1deg); }
                }
                @keyframes gentle-glow {
                  0%, 100% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.3), 0 25px 50px rgba(0, 0, 0, 0.3); }
                  50% { box-shadow: 0 0 60px rgba(168, 85, 247, 0.4), 0 25px 50px rgba(0, 0, 0, 0.4); }
                }
                .hero-illustration {
                  animation: floating 6s ease-in-out infinite;
                }
                .hero-illustration-wrapper {
                  animation: gentle-glow 4s ease-in-out infinite;
                }
              `}</style>
              
              <div className="hero-illustration-wrapper relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.05] max-h-[700px]">
                <div className="hero-illustration">
                  <img
                    src="/hero-illustration.png"
                    alt="RSA Studio Services - Website, App Development, AI Automation"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Tech Badge */}
              <div className="absolute -bottom-6 -right-2 md:right-0 bg-[#1e293b] border border-purple-500/30 p-4 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Status</div>
                    <div className="text-sm font-bold text-white">Ready for Projects</div>
                  </div>
                </div>
              </div>

              {/* Floating Service Highlight */}
              <div className="absolute top-10 -left-6 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl -rotate-12 hidden md:block border border-white/20">
                <span className="text-xs font-bold text-white">Full Stack Solutions</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
