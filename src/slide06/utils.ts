export interface PocStepColorStyles {
  stepBadgeClass: string;
  stepLabelClass: string;
  checkmarkClass: string;
}

export const getPocColorStyles = (colorScheme: 'rose' | 'emerald' | 'sky'): PocStepColorStyles => {
  switch (colorScheme) {
    case 'rose':
      return {
        stepBadgeClass: 'bg-rose-950 text-rose-300 border-rose-800',
        stepLabelClass: 'text-rose-400',
        checkmarkClass: 'text-rose-400'
      };
    case 'emerald':
      return {
        stepBadgeClass: 'bg-emerald-950 text-emerald-300 border-emerald-800',
        stepLabelClass: 'text-emerald-400',
        checkmarkClass: 'text-emerald-400'
      };
    case 'sky':
      return {
        stepBadgeClass: 'bg-sky-950 text-sky-300 border-sky-800',
        stepLabelClass: 'text-sky-400',
        checkmarkClass: 'text-sky-400'
      };
  }
};
