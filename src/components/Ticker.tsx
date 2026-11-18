import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TickerProps {
  variant?: 'violet' | 'pink' | 'yellow';
}

export const Ticker: React.FC<TickerProps> = ({ variant = 'violet' }) => {
  const { content } = useLanguage();
  const items = content.ticker;

  const bgColors = {
    violet: 'bg-[#C3ACFF] text-[#2E2833]',
    pink: 'bg-[#FFD6DF] text-[#2E2833]',
    yellow: 'bg-[#FFEAA0] text-[#2E2833]',
  };

  return (
    <div className={`overflow-hidden border-b-2 border-[#2E2833] py-2.5 font-heading text-xs tracking-wider uppercase select-none ${bgColors[variant]}`}>
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Render 3 sets of items to ensure smooth continuous loop */}
        {[0, 1, 2].map((setIndex) => (
          <div key={setIndex} className="flex items-center space-x-6 px-4">
            {items.map((item, i) => (
              <React.Fragment key={`${setIndex}-${i}`}>
                <span className="font-bold tracking-widest">{item}</span>
                <span className="text-sm">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
