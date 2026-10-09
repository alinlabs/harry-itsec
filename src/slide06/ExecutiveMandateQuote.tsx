import React from 'react';
import { SLIDE_06_COPY } from './data';

interface ExecutiveMandateQuoteProps {
  isId: boolean;
}

export const ExecutiveMandateQuote: React.FC<ExecutiveMandateQuoteProps> = ({ isId }) => {
  return (
    <div className="mt-auto pt-1.5 shrink-0 text-center text-[11px] text-neutral-300">
      <p className="max-w-4xl mx-auto leading-snug">
        {isId ? SLIDE_06_COPY.mandateQuoteId : SLIDE_06_COPY.mandateQuoteEn}
      </p>
    </div>
  );
};
