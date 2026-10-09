import React from 'react';
import { Filter, Search } from 'lucide-react';
import { CATEGORY_FILTER_OPTIONS } from './data';

interface PartnerFilterToolbarProps {
  isId: boolean;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const PartnerFilterToolbar: React.FC<PartnerFilterToolbarProps> = ({
  isId,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 p-2 bg-[#0b0c12] border border-neutral-800 rounded">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-1">
        <span className="text-[10px] font-mono text-neutral-400 mr-1 flex items-center gap-1">
          <Filter className="w-3 h-3 text-rose-500" />
          {isId ? 'Kategori:' : 'Category:'}
        </span>
        {CATEGORY_FILTER_OPTIONS.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              data-active-tab={isActive ? 'true' : 'false'}
              className={`px-2.5 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                isActive
                  ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold border border-rose-600 shadow-xs'
                  : 'bg-slate-200/80 dark:bg-neutral-950 text-slate-700 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-neutral-900'
              }`}
            >
              <span className={isActive ? 'text-white !text-white font-bold' : ''}>
                {isId ? cat.labelId : cat.labelEn}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Input */}
      <div className="relative min-w-[200px]">
        <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={isId ? 'Cari SI, sektor, atau basis klien...' : 'Search SI, sector, or client base...'}
          className="w-full bg-neutral-950 border border-neutral-800 rounded pl-8 pr-2.5 py-1 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500"
        />
      </div>
    </div>
  );
};
