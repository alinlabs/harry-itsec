import React from 'react';
import { Slide07Container } from './container';
import { Slide07CommercializationProps } from './types';

/**
 * Slide07Commercialization (Bab 07)
 * Entry point façade delegating execution to modular Slide07Container.
 */
export const Slide07Commercialization: React.FC<Slide07CommercializationProps> = (props) => {
  return <Slide07Container {...props} />;
};

export default Slide07Commercialization;
export * from './types';
export * from './data';
