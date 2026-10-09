import React from 'react';
import { Slide11Container } from './container';
import { Slide11ClosingProps } from './types';

/**
 * Slide11Closing (Bab 11)
 * Entry point façade delegating execution to modular Slide11Container.
 */
export const Slide11Closing: React.FC<Slide11ClosingProps> = (props) => {
  return <Slide11Container {...props} />;
};

export default Slide11Closing;
export * from './types';
