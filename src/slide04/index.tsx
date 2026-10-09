import React from 'react';
import { Slide04Container } from './container';
import { Slide04GoToMarketProps } from './types';

/**
 * Slide04GoToMarket (Bab 04)
 * Entry point façade delegating execution to modular Slide04Container.
 */
export const Slide04GoToMarket: React.FC<Slide04GoToMarketProps> = (props) => {
  return <Slide04Container {...props} />;
};

export default Slide04GoToMarket;
export * from './types';
export * from './data';
