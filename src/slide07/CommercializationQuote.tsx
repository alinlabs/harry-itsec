import React from 'react';
import { SLIDE_07_COPY } from './data';

interface CommercializationQuoteProps {
  isId: boolean;
}

export const CommercializationQuote: React.FC<CommercializationQuoteProps> = ({ isId }) => {
  return (
    <div className="mt-auto pt-1.5 shrink-0 text-center text-[11px] text-neutral-300">
      <p className="max-w-4xl mx-auto leading-snug font-mono">
        {isId ? SLIDE_07_COPY.mandateQuote.id : SLIDE_07_COPY.mandateQuote.en}
      </p>
    </div>
  );
};
