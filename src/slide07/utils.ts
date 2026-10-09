export interface TierBadgeStyles {
  containerClass: string;
  badgeClass: string;
  nodeTextClass: string;
}

export const getTierBadgeStyles = (variant: 'neutral' | 'emerald' | 'purple'): TierBadgeStyles => {
  switch (variant) {
    case 'emerald':
      return {
        containerClass: 'border-b border-emerald-900/60 pb-1',
        badgeClass: 'px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 font-bold',
        nodeTextClass: 'text-emerald-400 font-bold'
      };
    case 'purple':
      return {
        containerClass: 'border-b border-neutral-800 pb-1',
        badgeClass: 'px-1 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-bold',
        nodeTextClass: 'text-neutral-400'
      };
    case 'neutral':
    default:
      return {
        containerClass: 'border-b border-neutral-800 pb-1',
        badgeClass: 'px-1 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 font-bold',
        nodeTextClass: 'text-neutral-400'
      };
  }
};

export const getPillarColorClass = (colorScheme: 'rose' | 'amber' | 'sky'): string => {
  switch (colorScheme) {
    case 'rose':
      return 'text-rose-400';
    case 'amber':
      return 'text-amber-400';
    case 'sky':
      return 'text-sky-400';
    default:
      return 'text-emerald-400';
  }
};

export const getFlywheelColorClass = (colorScheme: 'rose' | 'amber' | 'emerald'): string => {
  switch (colorScheme) {
    case 'rose':
      return 'text-rose-400';
    case 'amber':
      return 'text-amber-400';
    case 'emerald':
      return 'text-emerald-400';
    default:
      return 'text-neutral-400';
  }
};
