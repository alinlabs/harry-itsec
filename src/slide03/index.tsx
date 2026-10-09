import React from 'react';
import { Slide03Container } from './container';
import { Slide03TargetMarketMapProps } from './types';

/**
 * Slide03TargetMarketMap (Bab 03)
 * Entry point façade delegating execution to modular Slide03Container.
 */
export const Slide03TargetMarketMap: React.FC<Slide03TargetMarketMapProps> = (props) => {
  return <Slide03Container {...props} />;
};

export default Slide03TargetMarketMap;
export type { Slide03TargetMarketMapProps };
export * from './types';
export * from './data';
