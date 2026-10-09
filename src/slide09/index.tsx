import React from 'react';
import { Slide09Container } from './container';
import { Slide09NinetyDayExecutionProps } from './types';

/**
 * Slide09NinetyDayExecution (Bab 09)
 * Entry point façade delegating execution to modular Slide09Container.
 */
export const Slide09NinetyDayExecution: React.FC<Slide09NinetyDayExecutionProps> = (props) => {
  return <Slide09Container {...props} />;
};

export default Slide09NinetyDayExecution;
export * from './types';
