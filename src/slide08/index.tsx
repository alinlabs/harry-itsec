import React from 'react';
import { Slide08Container } from './container';
import { Slide08PartnershipsProps } from './types';

/**
 * Slide08Partnerships (Bab 08)
 * Entry point façade delegating execution to modular Slide08Container.
 */
export const Slide08Partnerships: React.FC<Slide08PartnershipsProps> = (props) => {
  return <Slide08Container {...props} />;
};

export default Slide08Partnerships;
export * from './types';
