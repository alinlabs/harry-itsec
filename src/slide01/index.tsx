import React from 'react';
import { Slide01Container } from './container';
import { Slide01OpeningProps } from './types';

/**
 * Slide01Opening (Bab 01)
 * Entry point façade delegating execution to modular Slide01Container.
 */
export const Slide01Opening: React.FC<Slide01OpeningProps> = (props) => {
  return <Slide01Container {...props} />;
};

export { Slide01Container };
export * from './types';
export * from './data';
export default Slide01Opening;
