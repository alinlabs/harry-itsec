import React from 'react';
import { Slide05Container } from './container';
import { Slide05AccountPipelineProps } from './types';

/**
 * Slide05AccountPipeline (Bab 05)
 * Entry point façade delegating execution to modular Slide05Container.
 */
export const Slide05AccountPipeline: React.FC<Slide05AccountPipelineProps> = (props) => {
  return <Slide05Container {...props} />;
};

export default Slide05AccountPipeline;
export * from './types';
export * from './data';
export * from './utils';
