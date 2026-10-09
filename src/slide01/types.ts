export interface Slide01OpeningProps {
  onNext: () => void;
  isLocked?: boolean;
}

export type SlideProps = Slide01OpeningProps;

export interface FactMetric {
  id: string;
  labelId: string;
  labelEn: string;
  valueId: string;
  valueEn: string;
  subtextId: string;
  subtextEn: string;
  valueColorClass?: string;
}

export interface StrategicPillar {
  id: string;
  icon: 'Shield' | 'Target' | 'TrendingUp';
  labelId: string;
  labelEn: string;
  valueId: string;
  valueEn: string;
}
