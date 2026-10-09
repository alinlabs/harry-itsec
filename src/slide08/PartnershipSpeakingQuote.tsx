import React from 'react';
import { SLIDE_08_COPY } from './data';

interface PartnershipSpeakingQuoteProps {
  isId: boolean;
}

export const PartnershipSpeakingQuote: React.FC<PartnershipSpeakingQuoteProps> = ({ isId }) => {
  return (
    <div className="mt-auto pt-1.5 shrink-0 text-center text-xs text-neutral-300">
      <p className="max-w-4xl mx-auto leading-relaxed">
        {isId ? SLIDE_08_COPY.footerQuote.id : SLIDE_08_COPY.footerQuote.en}
      </p>
    </div>
  );
};
