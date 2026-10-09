import React from 'react';
import { SLIDE_10_COPY } from './data';

interface ControlTowerQuoteFooterProps {
  isId: boolean;
}

export const ControlTowerQuoteFooter: React.FC<ControlTowerQuoteFooterProps> = ({ isId }) => {
  return (
    <div className="mt-auto pt-1.5 shrink-0 text-center text-[11px] text-neutral-300">
      <p className="max-w-4xl mx-auto leading-snug">
        {isId ? SLIDE_10_COPY.quote.id : SLIDE_10_COPY.quote.en}
      </p>
    </div>
  );
};
