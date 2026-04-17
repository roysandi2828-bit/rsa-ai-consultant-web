import React, { useState, useEffect } from 'react';

export const DeviceMockups: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  // Auto-rotate screens every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="relative w-full max-w-6xl h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-2 md:px-0">

        {/* Laptop Mockup */}
        <div className="laptop-mockup mockup-glow relative md:relative z-20">
          <div className="w-[280px] sm:w-[320px] md:w-[420px] lg:w-[600px]">
            {/* Bezel */}
            <div className="rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl border border-gray-700">
              {/* Browser Bar */}
              <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-2xl px-4 py-3 flex items-center space-x-2 border-b border-gray-600">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 ml-4 text-xs text-gray-400">RSA Studio</div>
              </div>

              {/* Screen Content - Dynamic based on currentScreen */}
              <div className="bg-gradient-to-b from-[#0b0f19] via-[#1a1f35] to-[#0b0f19] rounded-b-2xl overflow-hidden">
                <div className="aspect-video flex flex-col justify-center items-center p-6 md:p-8 transition-opacity duration-500">
                  {/* Screen 0: Hero/Services */}
                  {currentScreen === 0 && (
                    <>
                      <div className="text-center mb-6">
                        <div className="inline-block px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 mb-4">
                          <span className="text-xs font-bold text-blue-400">🚀 Professional Website</span>
                        </div>
                      </div>
                      <h1 className="text-lg md:text-2xl font-black text-white text-center mb-3 max-w-xs">
                        Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Profesional</span>
                      </h1>
                      <p className="text-xs md:text-sm text-gray-400 text-center max-w-sm mb-6">
                        Professional websites & full-stack applications
                      </p>
                      <button className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xs md:text-sm font-bold">
                        Konsultasi Gratis
                      </button>
                      <div className="grid grid-cols-3 gap-2 mt-6 w-full max-w-xs">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                          <div className="text-xs text-gray-500">Website</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                          <div className="text-xs text-gray-500">Mobile</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                          <div className="text-xs text-gray-500">App</div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Screen 1: Dashboard Traffic */}
                  {currentScreen === 1 && (
                    <>
                      <div className="text-center mb-4 w-full">
                        <div className="inline-block px-3 py-1.5 rounded-full bg-green-600/20 border border-green-500/30 mb-3">
                          <span className="text-xs font-bold text-green-400">📊 Analytics Dashboard</span>
                        </div>
                        <h2 className="text-lg font-bold text-white mb-4">Traffic Growth</h2>
                      </div>
                      <div className="w-full max-w-xs space-y-3">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border border-cyan-500/30 rounded-lg p-3">
                            <div className="text-xs text-cyan-400 font-bold">2,564</div>
                            <div className="text-[10px] text-gray-500">Visitors</div>
                          </div>
                          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 border border-green-500/30 rounded-lg p-3">
                            <div className="text-xs text-green-400 font-bold">1,280</div>
                            <div className="text-[10px] text-gray-500">Conversions</div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 rounded-lg p-3">
                            <div className="text-xs text-purple-400 font-bold">48%</div>
                            <div className="text-[10px] text-gray-500">Growth</div>
                          </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <div className="flex items-end space-x-1 h-12">
                            <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded h-4"></div>
                            <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded h-6"></div>
                            <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded h-8"></div>
                            <div className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded h-5"></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Screen 2: AI Automation */}
                  {currentScreen === 2 && (
                    <>
                      <div className="text-center mb-4 w-full">
                        <div className="inline-block px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 mb-3">
                          <span className="text-xs font-bold text-purple-400">🤖 AI Automation</span>
                        </div>
                        <h2 className="text-lg font-bold text-white mb-4">Smart Automation</h2>
                      </div>
                      <div className="w-full max-w-xs space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 border border-pink-500/30 rounded-lg p-3 flex flex-col items-center">
                            <div className="text-xl mb-1">⚙️</div>
                            <div className="text-xs text-pink-400 font-bold">Automation</div>
                          </div>
                          <div className="bg-gradient-to-br from-orange-600/30 to-yellow-600/30 border border-orange-500/30 rounded-lg p-3 flex flex-col items-center">
                            <div className="text-xl mb-1">🧠</div>
                            <div className="text-xs text-orange-400 font-bold">AI Learning</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 rounded-lg p-3 flex flex-col items-center">
                            <div className="text-xl mb-1">⚡</div>
                            <div className="text-xs text-indigo-400 font-bold">Real-time</div>
                          </div>
                          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 border border-teal-500/30 rounded-lg p-3 flex flex-col items-center">
                            <div className="text-xl mb-1">🔗</div>
                            <div className="text-xs text-teal-400 font-bold">Integration</div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-8 right transform -translate-x-1/2 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg px-4 py-2 shadow-xl whitespace-nowrap">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Status</div>
                  <div className="text-xs font-semibold text-white">Available for Project</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Mockup */}
        <div className="mobile-mockup mockup-glow relative md:relative z-10">
          <div className="w-[160px] sm:w-[200px] md:w-[200px] lg:w-[240px]">
            {/* Phone Outer Frame - iPhone Style */}
            <div className="rounded-[2.2rem] bg-gradient-to-b from-gray-800 via-gray-900 to-black shadow-2xl border-[6px] relative overflow-hidden"
              style={{
                borderColor: '#1a1a1a',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 40px rgba(100, 200, 255, 0.15)',
                aspectRatio: '9 / 19.5'
              }}>
              
              {/* Screen Display Area */}
              <div className="bg-gradient-to-b from-[#0b0f19] via-[#1a1f35] to-[#0b0f19] relative">
                {/* Notch */}
                <div className="flex justify-center pt-2 pb-3 relative z-10">
                  <div className="w-24 h-5 bg-black rounded-b-2xl shadow-lg"></div>
                </div>

                {/* Status Bar with Icons */}
                <div className="px-4 py-1.5 flex items-center justify-between text-[9px] text-white bg-gradient-to-b from-black/30 to-transparent">
                  <span className="font-bold">9:41</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                    <div className="w-4 h-2 border border-white rounded-sm relative">
                      <div className="absolute right-0.5 top-0.5 w-1 h-1 bg-white rounded-xs"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen Content - Dynamic based on currentScreen */}
              <div className="bg-gradient-to-b from-[#0b0f19] via-[#1a1f35] to-[#0b0f19] overflow-hidden rounded-b-[2.0rem] flex-1 flex flex-col">
                <div className="flex-1 flex flex-col justify-center items-center p-2.5 transition-opacity duration-500 overflow-y-auto">
                  {/* Screen 0: Hero Mobile */}
                  {currentScreen === 0 && (
                    <>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-3">
                        <span className="text-xs font-black text-white">R</span>
                      </div>
                      <h2 className="text-sm font-black text-white text-center mb-2">
                        Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Profesional</span>
                      </h2>
                      <p className="text-[10px] text-gray-400 text-center mb-3">Solutions for your business</p>
                      <button className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xs font-bold mb-3">
                        Mulai Sekarang
                      </button>
                      <div className="space-y-2 w-full">
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
                    </>
                  )}

                  {/* Screen 1: Analytics Mobile */}
                  {currentScreen === 1 && (
                    <>
                      <div className="text-center mb-3 w-full">
                        <div className="text-xs font-bold text-cyan-400 mb-2">📊 Analytics</div>
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <div className="bg-cyan-600/20 border border-cyan-500/30 rounded p-2">
                            <div className="text-xs text-cyan-400 font-bold">2.5K</div>
                            <div className="text-[9px] text-gray-500">Visitors</div>
                          </div>
                          <div className="bg-green-600/20 border border-green-500/30 rounded p-2">
                            <div className="text-xs text-green-400 font-bold">48%</div>
                            <div className="text-[9px] text-gray-500">Growth</div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-white/5 border border-white/10 rounded p-2 mb-3">
                        <div className="flex items-end space-x-1 h-8">
                          <div className="flex-1 bg-cyan-500 rounded h-3"></div>
                          <div className="flex-1 bg-cyan-500 rounded h-4"></div>
                          <div className="flex-1 bg-cyan-500 rounded h-5"></div>
                          <div className="flex-1 bg-cyan-500 rounded h-3"></div>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-cyan-600 rounded-full text-white text-xs font-bold">
                        View Details
                      </button>
                    </>
                  )}

                  {/* Screen 2: AI Features Mobile */}
                  {currentScreen === 2 && (
                    <>
                      <div className="text-center mb-3 w-full">
                        <div className="text-xs font-bold text-purple-400 mb-3">🤖 AI Features</div>
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-2 flex flex-col items-center">
                            <span className="text-lg">⚙️</span>
                            <span className="text-[9px] text-purple-400 mt-1">Automation</span>
                          </div>
                          <div className="bg-pink-600/20 border border-pink-500/30 rounded-lg p-2 flex flex-col items-center">
                            <span className="text-lg">🧠</span>
                            <span className="text-[9px] text-pink-400 mt-1">AI Smart</span>
                          </div>
                          <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-lg p-2 flex flex-col items-center">
                            <span className="text-lg">⚡</span>
                            <span className="text-[9px] text-indigo-400 mt-1">Real-time</span>
                          </div>
                          <div className="bg-cyan-600/20 border border-cyan-500/30 rounded-lg p-2 flex flex-col items-center">
                            <span className="text-lg">🔗</span>
                            <span className="text-[9px] text-cyan-400 mt-1">Integrate</span>
                          </div>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-purple-600 rounded-full text-white text-xs font-bold">
                        Explore AI
                      </button>
                    </>
                  )}
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
