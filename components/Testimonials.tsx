import React from 'react';
import { TestimonialCard, TestimonialAuthor } from './TestimonialCard';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialData {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

const testimonials: TestimonialData[] = [
  {
    author: {
      name: "Budi Santoso",
      handle: "CEO Global Logistic",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "RSA Studio membantu kami melakukan digitalisasi seluruh operasional bisnis. Website yang mereka buat sangat cepat, responsif, dan yang terpenting: mendatangkan profit!"
  },
  {
    author: {
      name: "Siti Nurhaliza",
      handle: "Founder Kuliner Kita",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Dengan website dari RSA Studio, penjualan online saya meningkat 300% dalam 3 bulan pertama. Customer service mereka juga luar biasa responsif dan helpful!"
  },
  {
    author: {
      name: "Ahmad Wijaya",
      handle: "Director PT Teknologi Maju",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Tim RSA Studio benar-benar memahami kebutuhan bisnis kami. Mereka tidak hanya membuat website cantik, tapi juga fokus pada user experience dan conversion optimization."
  },
  {
    author: {
      name: "Lisa Chen",
      handle: "CEO Beauty Innovation",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Profesional, tepat waktu, dan hasil yang melampaui ekspektasi. RSA Studio adalah partner terbaik untuk transformasi digital brand kami. Highly recommended!"
  },
  {
    author: {
      name: "Rakhmat Hidayat",
      handle: "Owner Properti Indonesia",
      avatar: "https://images.unsplash.com/photo-1522075782348-d3adc2eaced2?w=150&h=150&fit=crop&crop=face"
    },
    text: "Website yang mereka buat membantu kami mengelola listing properti dengan lebih efisien. Interface-nya user-friendly dan loading-nya sangat cepat di semua device."
  },
  {
    author: {
      name: "Dewi Lestari",
      handle: "Founder UMKM Fashion",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Investasi terbaik untuk bisnis kami! Traffic website meningkat drastis dan banyak order baru dari online. Team RSA sangat supportive dari awal hingga akhir."
  },
  {
    author: {
      name: "Irfan Pratama",
      handle: "CTO Startup Tech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Sebagai developer, saya sangat menghargai code quality dan attention to detail yang ditunjukkan RSA Studio. Website yang scalable dan maintainable!"
  },
  {
    author: {
      name: "Maya Putri",
      handle: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Campaign kami jauh lebih efektif dengan website baru dari RSA Studio. SEO optimization mereka sangat bagus, ranking kami naik signifikan di Google!"
  }
];

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('testimonialsTitle')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          {/* First row - scrolling left */}
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] mb-8">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-left">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`left-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Second row - scrolling right */}
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-right">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`right-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-[#0b0f19] md:block"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-[#0b0f19] md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
