
import React from 'react';

const projects = [
  {
    title: "MotoParts",
    category: "E-COMMERCE STORE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8n0hroms6xOYF6XkHty1OxFlbMFbcL.png",
    description: "Platform e-commerce spare part motor dengan katalog lengkap, harga kompetitif, dan sistem order mudah via WhatsApp untuk kemudahan pelanggan.",
    link: "https://moto-sparepart.vercel.app/"
  },
  {
    title: "Dashboard Performance",
    category: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "Dashboard monitoring performance dengan validasi hasil real-time dan leaderboard agen.",
    link: "https://qc-2-dashboard.vercel.app/"
  },
  {
    title: "Fit-RSA",
    category: "FITNESS APP",
    image: "/fit-rsa-preview.jpg",
    description: "Personal Workout Generator dengan AI-powered personalized workout plans, real-time progress tracking, dan science-backed training programs untuk mencapai fitness goals Anda.",
    link: "https://fit-rsa.vercel.app/"
  },
  {
    title: "RSA Fashion",
    category: "E-COMMERCE STORE",
    image: "/rsa-fashion-preview.jpg",
    description: "Platform fashion e-commerce dengan koleksi tren terkini, fitur wishlist, ulasan produk, sistem pembayaran aman, dan pengiriman ke seluruh nusantara.",
    link: "https://rsa-fashion-app.vercel.app/"
  },
  {
    title: "FinTech Pro",
    category: "FINANCIAL SERVICES",
    image: "/fintech-preview.jpg",
    description: "Platform fintech untuk investasi dan trading dengan dashboard analitik pasar real-time, portfolio management, berita finansial, dan edukasi investasi lengkap.",
    link: "https://fintech-pro.vercel.app/"
  },
  {
    title: "Luxe Estate",
    category: "REAL ESTATE WEBSITE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "Website properti mewah dengan sistem filter pencarian canggih, galeri foto HD 360, virtual tour, estimasi harga, dan konsultasi langsung dengan agen."
  }
];

const Portfolio: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0b0f19]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Karya Terbaru Kami</h2>
            <p className="text-gray-400">Setiap proyek dikerjakan dengan penuh ketelitian untuk menghasilkan kualitas yang melebihi ekspektasi klien.</p>
          </div>
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center text-blue-500 font-bold hover:text-blue-400 transition-colors group"
          >
            Lihat Semua Portfolio
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl shadow-2xl bg-gray-900 border border-white/5"
              onClick={(e) => {
                if ((proj as any).link && !(e.target as HTMLElement).closest('a')) {
                  window.open((proj as any).link, '_blank');
                } else {
                  scrollToContact();
                }
              }}
              style={{ cursor: (proj as any).link ? 'pointer' : 'pointer' }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 md:p-12">
                <span className="text-blue-400 font-semibold mb-2 tracking-widest uppercase text-xs">{proj.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{proj.title}</h3>
                <p className="text-gray-300 text-sm mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{proj.description}</p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {(proj as any).link ? (
                    <a
                      href={(proj as any).link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-5 py-2 rounded-full glass-effect text-[10px] uppercase tracking-widest font-black border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToContact();
                      }}
                      className="px-5 py-2 rounded-full glass-effect text-[10px] uppercase tracking-widest font-black border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
