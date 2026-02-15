import React from 'react';

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  text,
  href
}) => {
  const Card = href ? 'a' : 'div';

  return (
    <Card
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:from-white/10 hover:to-white/5 max-w-[280px] transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={author.avatar} 
          alt={author.name} 
          className="w-12 h-12 rounded-full border border-white/20"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold text-white">
            {author.name}
          </h3>
          <p className="text-xs text-gray-400">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">
        {text}
      </p>
    </Card>
  );
};
