import React from 'react';
import { Slide10Container } from './container';
import { Slide10KPIControlTowerProps } from './types';

/**
 * Slide10KPIControlTower (Bab 10)
 * Entry point façade delegating execution to modular Slide10Container.
 */
export const Slide10KPIControlTower: React.FC<Slide10KPIControlTowerProps> = (props) => {
  return <Slide10Container {...props} />;
};

export type { Slide10KPIControlTowerProps };
