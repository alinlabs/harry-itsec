import React from 'react';
import { EXECUTION_MILESTONE_MONTHS } from './data';
import { MonthMilestoneCard } from './MonthMilestoneCard';

interface ExecutionTriptychViewProps {
  isId: boolean;
}

export const ExecutionTriptychView: React.FC<ExecutionTriptychViewProps> = ({ isId }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 items-start">
      {EXECUTION_MILESTONE_MONTHS.map((milestone) => (
        <MonthMilestoneCard
          key={milestone.id}
          milestone={milestone}
          isId={isId}
        />
      ))}
    </div>
  );
};
