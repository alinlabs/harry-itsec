import React from 'react';
import { SLIDE_09_COPY } from './data';

interface ExecutionQuoteFooterProps {
  isId: boolean;
}

export const ExecutionQuoteFooter: React.FC<ExecutionQuoteFooterProps> = ({ isId }) => {
  return (
    <div className="mt-auto pt-1.5 shrink-0 text-center text-xs text-neutral-300">
      <p className="max-w-4xl mx-auto leading-relaxed">
        {isId ? SLIDE_09_COPY.quoteFooter.id : SLIDE_09_COPY.quoteFooter.en}
      </p>
    </div>
  );
};
