
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-effect border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide animate-float">
              🚀 Jasa Pembuatan Website No. 1 di Indonesia
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Ubah Ide Bisnis Anda Menjadi <span className="gradient-text">Website Kelas Dunia</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Halo, saya founder <span className="text-white font-semibold">RSA Studio</span>. Kami membangun website yang tidak hanya indah secara visual, tetapi juga dirancang khusus untuk meningkatkan konversi dan profit bisnis Anda secara signifikan.
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

          {/* Right Column: User Photo */}
          <div className="order-1 lg:order-2 relative group px-4 md:px-0">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full group-hover:bg-blue-600/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="https://ik.imagekit.io/kploq48i9/Photo_Roy.jpeg" 
                  alt="Founder RSA Studio" 
                  className="w-full h-auto aspect-[4/5] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-40"></div>
              </div>

              {/* Floating Status Badge */}
              <div className="absolute -bottom-6 -right-2 md:right-0 bg-[#1e293b] border border-white/10 p-4 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Status</div>
                    <div className="text-sm font-bold text-white">Available for Project</div>
                  </div>
                </div>
              </div>

              {/* Floating Expertise Badge */}
              <div className="absolute top-10 -left-6 bg-blue-600/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl -rotate-12 hidden md:block">
                <span className="text-xs font-bold text-white">Premium Web Solution</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
