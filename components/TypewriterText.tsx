import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ words, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 50 : 100;
    const delay = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Word complete, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Move to next word
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
          setCharIndex(0);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
        {displayText}
      </span>
      <span className="inline-block w-1 h-12 bg-gradient-to-r from-blue-400 to-emerald-500 animate-pulse"></span>
    </span>
  );
};
