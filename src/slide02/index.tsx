import React from 'react';
import { Slide02Container } from './container';
import { Slide02MarketIntelligenceProps } from './types';

/**
 * Slide02MarketIntelligence (Bab 02)
 * Entry point façade delegating execution to modular Slide02Container.
 */
export const Slide02MarketIntelligence: React.FC<Slide02MarketIntelligenceProps> = (props) => {
  return <Slide02Container {...props} />;
};

export default Slide02MarketIntelligence;
export * from './types';
export * from './data';
export * from './utils';
