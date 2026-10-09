import React from 'react';
import { Slide06Container } from './container';
import { Slide06SalesMotionProps } from './types';

/**
 * Slide06SalesMotion (Bab 06)
 * Entry point façade delegating execution to modular Slide06Container.
 */
export const Slide06SalesMotion: React.FC<Slide06SalesMotionProps> = (props) => {
  return <Slide06Container {...props} />;
};

export default Slide06SalesMotion;
export * from './types';
export * from './data';
