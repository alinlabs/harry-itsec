import React from 'react';
import { SLIDE_11_COPY } from './data';

interface ClosingQuoteFooterProps {
  isId: boolean;
}

export const ClosingQuoteFooter: React.FC<ClosingQuoteFooterProps> = ({ isId }) => {
  return (
    <div className="mt-auto pt-1.5 shrink-0 text-center text-xs text-neutral-300">
      <p className="max-w-4xl mx-auto leading-relaxed">
        {isId 
          ? SLIDE_11_COPY.bottomQuote.id 
          : SLIDE_11_COPY.bottomQuote.en}
      </p>
    </div>
  );
};
