
import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0f19] py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">R</div>
              <span className="text-2xl font-extrabold tracking-tight">RSA Studio</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">Membangun masa depan digital Indonesia melalui website yang inovatif, cepat, dan terukur.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110">
                <span className="text-[10px] font-bold">FB</span>
              </a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110">
                <span className="text-[10px] font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110">
                <span className="text-[10px] font-bold">WA</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Layanan</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Landing Page</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Company Profile</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">E-Commerce</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">SEO Optimization</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">RSA Studio</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Tentang Kami</button></li>
              <li><button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">Daftar Paket</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Hubungi Kami</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Konsultasi Gratis</h4>
            <p className="text-gray-400 mb-4 text-sm">Dapatkan analisis website gratis untuk bisnis Anda.</p>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollTo('contact')} 
                className="bg-blue-600 hover:bg-blue-700 text-center transition-colors px-4 py-3 rounded-lg font-bold text-sm active:scale-95 text-white"
              >
                Mulai Sekarang
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© 2024 RSA Studio. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
