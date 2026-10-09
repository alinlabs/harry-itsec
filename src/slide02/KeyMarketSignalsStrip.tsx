import React from 'react';
import { KEY_MARKET_SIGNALS } from './data';
import { getLocalizedSignal } from './utils';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface KeyMarketSignalsStripProps {
  isId: boolean;
}

export const KeyMarketSignalsStrip: React.FC<KeyMarketSignalsStripProps> = ({ isId }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-1.5 shrink-0">
      {KEY_MARKET_SIGNALS.map((sig, i) => {
        const { labelText, changeText, valText, isAccent, dataTypeBadge } = getLocalizedSignal(sig, i, isId);

        return (
          <div 
            key={sig.label}
            className="p-2.5 bg-[#0b0c12]/90 border border-neutral-800 rounded flex flex-col justify-between card-interactive-shimmer cursor-pointer"
          >
            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-0.5 truncate">
                {labelText}
              </span>
              <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-white flex items-baseline gap-1">
                <span className={isAccent ? 'text-rose-400' : ''}>
                  <AnimatedCounter value={valText} />
                </span>
              </div>
            </div>
            <div className="pt-0.5 mt-1 flex items-center justify-between text-[10px] font-mono">
              <span className="text-neutral-400 truncate">{changeText}</span>
              <span className="text-neutral-500 font-bold">{dataTypeBadge}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
