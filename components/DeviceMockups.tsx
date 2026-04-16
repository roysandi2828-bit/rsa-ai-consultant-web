import React from 'react';

export const DeviceMockups: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes float-laptop {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-30px) rotate(-2deg); }
        }
        @keyframes float-mobile {
          0%, 100% { transform: translateY(20px) rotate(8deg); }
          50% { transform: translateY(-10px) rotate(8deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.4));
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.2);
          }
          50% { 
            filter: drop-shadow(0 0 40px rgba(168, 85, 247, 0.6));
            box-shadow: 0 0 80px rgba(168, 85, 247, 0.3);
          }
        }
        .laptop-mockup {
          animation: float-laptop 5s ease-in-out infinite;
        }
        .mobile-mockup {
          animation: float-mobile 6s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .mockup-glow {
          animation: glow-pulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Container */}
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center px-4 md:px-0">
        
        {/* Laptop Mockup */}
        <div className="laptop-mockup mockup-glow absolute left-0 md:left-auto md:relative z-20">
          <div className="w-[420px] lg:w-[600px]">
            {/* Bezel */}
            <div className="rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl border border-gray-700">
              {/* Browser Bar */}
              <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-2xl px-4 py-3 flex items-center space-x-2 border-b border-gray-600">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 ml-4 text-xs text-gray-400">roysandiandrian.web.id</div>
              </div>

              {/* Screen Content */}
              <div className="bg-gradient-to-b from-[#0b0f19] via-[#1a1f35] to-[#0b0f19] rounded-b-2xl overflow-hidden">
                <div className="aspect-video flex flex-col justify-center items-center p-6 md:p-8">
                  {/* Logo */}
                  <div className="text-center mb-6">
                    <div className="inline-block px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 mb-4">
                      <span className="text-xs font-bold text-blue-400">🚀 AI-Powered Solutions</span>
                    </div>
                  </div>

                  {/* Heading Preview */}
                  <h1 className="text-lg md:text-2xl font-black text-white text-center mb-3 max-w-xs">
                    Transform Your Business Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Website Kelas Dunia</span>
                  </h1>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-400 text-center max-w-sm mb-6">
                    Professional websites & full-stack applications
                  </p>

                  {/* CTA Button */}
                  <button className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xs md:text-sm font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    Konsultasi Gratis
                  </button>

                  {/* Feature Cards Preview */}
                  <div className="grid grid-cols-3 gap-2 mt-6 w-full max-w-xs">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-500">Website</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-500">Mobile</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-500">Automation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Mockup */}
        <div className="mobile-mockup mockup-glow relative z-10 ml-8 md:ml-0">
          <div className="w-[220px] lg:w-[280px]">
            {/* Phone Bezel */}
            <div className="rounded-[3rem] bg-gradient-to-b from-gray-900 to-black p-2 shadow-2xl border-4 border-gray-800">
              {/* Status Bar */}
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-t-3xl px-3 py-2 flex items-center justify-between border-b border-gray-800">
                <span className="text-xs text-white font-bold">9:41</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Notch */}
              <div className="flex justify-center pb-2">
                <div className="w-32 h-6 bg-black rounded-b-3xl"></div>
              </div>

              {/* Screen Content */}
              <div className="bg-gradient-to-b from-[#0b0f19] via-[#1a1f35] to-[#0b0f19] rounded-3xl overflow-hidden">
                <div className="aspect-square flex flex-col justify-center items-center p-4">
                  {/* Mobile Logo */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-3">
                    <span className="text-xs font-black text-white">R</span>
                  </div>

                  {/* Mobile Heading */}
                  <h2 className="text-sm font-black text-white text-center mb-2">
                    Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Profesional</span>
                  </h2>

                  {/* Mobile Description */}
                  <p className="text-[10px] text-gray-400 text-center mb-3 max-w-xs">
                    Solutions for your business
                  </p>

                  {/* Mobile CTA */}
                  <button className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xs font-bold mb-3">
                    Mulai Sekarang
                  </button>

                  {/* Mobile Features */}
                  <div className="space-y-2 w-full max-w-xs">
                    <div className="flex items-center space-x-2 text-[10px] text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span>Premium Design</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span>Fast Loading</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span>Full Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceMockups;
