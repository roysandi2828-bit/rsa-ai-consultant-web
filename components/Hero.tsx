
import React, { useRef, useEffect } from 'react';
import { TypewriterText } from './TypewriterText';
import { useLanguage } from '../context/LanguageContext';
import DeviceMockups from './DeviceMockups';

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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start lg:pt-0">

          {/* Left Column: Text Content */}
          <div className="text-left w-full lg:w-1/2 order-1">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-effect border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide animate-float">
              🚀 {t('heroSubtitle')}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold mb-6 leading-tight">
              <div>Ubah Ide Bisnis</div>
              <div>Anda Menjadi</div>
              <TypewriterText words={t('heroTypewriterWords').split('|')} className="gradient-text" />
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              {t('heroDescription')}
            </p>

            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 order-3 lg:order-none w-full lg:w-auto mt-8 lg:mt-0">
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

            <div className="mt-8 lg:mt-12 flex items-center space-x-6 opacity-60 grayscale hover:grayscale-0 transition-all order-4 lg:order-none w-full lg:w-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Trusted By:</span>
              <div className="flex space-x-4">
                <img src="https://picsum.photos/80/30?grayscale&random=1" alt="Partner" className="h-6" />
                <img src="https://picsum.photos/80/30?grayscale&random=2" alt="Partner" className="h-6" />
                <img src="https://picsum.photos/80/30?grayscale&random=3" alt="Partner" className="h-6" />
              </div>
            </div>
          </div>

          {/* Right Column: Device Mockups */}
          <div className="relative flex justify-center lg:justify-end px-4 md:px-0 w-full lg:w-1/2 order-2">
            <DeviceMockups />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
