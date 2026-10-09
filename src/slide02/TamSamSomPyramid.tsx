import React from 'react';
import { SLIDE_02_COPY } from './data';

interface TamSamSomPyramidProps {
  isId: boolean;
  onSelectLayer: (layerIndex: number) => void;
}

export const TamSamSomPyramid: React.FC<TamSamSomPyramidProps> = ({ isId, onSelectLayer }) => {
  return (
    <div className="lg:col-span-5 !bg-transparent !border-0 !shadow-none p-1 sm:p-2 space-y-2 flex flex-col justify-between">
      <div className="text-center pb-1 shrink-0">
        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block text-center">
          {isId ? SLIDE_02_COPY.pyramidTitle.id : SLIDE_02_COPY.pyramidTitle.en}
        </span>
      </div>

      {/* Authentic Visual Tiered Pyramid (SOM Apex at Top -> SAM Middle -> TAM Foundation at Base) */}
      <div className="relative flex-1 min-h-[250px] sm:min-h-[280px] lg:min-h-[310px] w-full flex items-center justify-center py-2">
        <svg 
          className="w-full h-full overflow-visible select-none" 
          viewBox="0 0 540 280" 
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* SOM (Apex) Gradient */}
            <linearGradient id="somGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#be123c" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="somGradHover" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" stopOpacity="1" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="1" />
            </linearGradient>

            {/* SAM (Middle) Gradient */}
            <linearGradient id="samGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3f0e1f" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#250813" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="samGradHover" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5c152e" stopOpacity="1" />
              <stop offset="100%" stopColor="#370c1b" stopOpacity="1" />
            </linearGradient>

            {/* TAM (Foundation Base) Gradient */}
            <linearGradient id="tamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#181926" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0d0e16" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="tamGradHover" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#24263a" stopOpacity="1" />
              <stop offset="100%" stopColor="#151722" stopOpacity="1" />
            </linearGradient>

            {/* Subtle ambient tier drop shadow */}
            <filter id="pyramidShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* TIER 1: SOM (Serviceable Obtainable Market) - Summit Apex Tier (Idx 2) */}
          <g 
            className="cursor-pointer group transition-all"
            onClick={() => onSelectLayer(2)}
            filter="url(#pyramidShadow)"
          >
            <polygon
              points="160,8 380,8 418,92 122,92"
              fill="url(#somGrad)"
              stroke="#fb7185"
              strokeWidth="1.8"
              className="transition-all duration-200 group-hover:brightness-110"
            />
            
            {/* SOM Badge & Name */}
            <rect x="248" y="14" width="44" height="16" rx="3" fill="#881337" stroke="#fda4af" strokeWidth="0.8" />
            <text x="270" y="26" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="Inter, sans-serif">
              {SLIDE_02_COPY.somDetails.badge}
            </text>
            <text x="270" y="52" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="Inter, sans-serif">
              {isId ? SLIDE_02_COPY.somDetails.valId : SLIDE_02_COPY.somDetails.valEn}
            </text>
            <text x="270" y="74" fill="#ffe4e6" fontSize="10" fontWeight="500" textAnchor="middle" fontFamily="Inter, sans-serif">
              {isId ? SLIDE_02_COPY.somDetails.descId : SLIDE_02_COPY.somDetails.descEn}
            </text>
          </g>

          {/* TIER 2: SAM (Serviceable Addressable Market) - Middle Tier (Idx 1) */}
          <g 
            className="cursor-pointer group transition-all"
            onClick={() => onSelectLayer(1)}
            filter="url(#pyramidShadow)"
          >
            <polygon
              points="118,98 422,98 474,182 66,182"
              fill="url(#samGrad)"
              stroke="#be123c"
              strokeWidth="1.6"
              className="transition-all duration-200 group-hover:brightness-125"
            />

            {/* SAM Badge & Name */}
            <rect x="248" y="104" width="44" height="16" rx="3" fill="#18181b" stroke="#e11d48" strokeWidth="0.8" />
            <text x="270" y="116" fill="#f43f5e" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="Inter, sans-serif">
              {SLIDE_02_COPY.samDetails.badge}
            </text>
            <text x="270" y="142" fill="#ffffff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="Inter, sans-serif">
              {isId ? SLIDE_02_COPY.samDetails.valId : SLIDE_02_COPY.samDetails.valEn}
            </text>
            <text x="270" y="164" fill="#fda4af" fontSize="10" fontWeight="400" textAnchor="middle" fontFamily="Inter, sans-serif">
              {isId ? SLIDE_02_COPY.samDetails.descId : SLIDE_02_COPY.samDetails.descEn}
            </text>
          </g>

          {/* TIER 3: TAM (Total Addressable Market) - Broad Foundation Base (Idx 0) */}
          <g 
            className="cursor-pointer group transition-all"
            onClick={() => onSelectLayer(0)}
            filter="url(#pyramidShadow)"
          >
            <polygon
              points="62,188 478,188 534,272 6,272"
              fill="url(#tamGrad)"
              stroke="#3f3f46"
              strokeWidth="1.4"
              className="transition-all duration-200 group-hover:brightness-125 group-hover:stroke-neutral-500"
            />

            {/* TAM Badge & Name */}
            <rect x="248" y="194" width="44" height="16" rx="3" fill="#09090b" stroke="#52525b" strokeWidth="0.8" />
            <text x="270" y="206" fill="#a1a1aa" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="Inter, sans-serif">
              {SLIDE_02_COPY.tamDetails.badge}
            </text>
            <text x="270" y="232" fill="#ffffff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="Inter, sans-serif">
              {isId ? SLIDE_02_COPY.tamDetails.valId : SLIDE_02_COPY.tamDetails.valEn}
            </text>
            <text x="270" y="254" fill="#a1a1aa" fontSize="10" fontWeight="400" textAnchor="middle" fontFamily="Inter, sans-serif">
              {isId ? SLIDE_02_COPY.tamDetails.descId : SLIDE_02_COPY.tamDetails.descEn}
            </text>
          </g>
        </svg>
      </div>

      {/* 2 Cards Below Pyramid: Strategi (Kiri) & Target (Kanan) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 shrink-0">
        <div className="p-2 sm:p-2.5 bg-neutral-950/80 border border-neutral-900 rounded text-[11px] font-mono leading-snug card-interactive-shimmer">
          <span className="font-bold text-white">{isId ? 'Strategi' : 'Strategy'}</span>
          <span className="font-normal text-neutral-400">: </span>
          <span className="font-normal text-neutral-300">
            {isId ? SLIDE_02_COPY.pyramidStrategyLeft.id : SLIDE_02_COPY.pyramidStrategyLeft.en}
          </span>
        </div>
        <div className="p-2 sm:p-2.5 bg-neutral-950/80 border border-neutral-900 rounded text-[11px] font-mono leading-snug card-interactive-shimmer">
          <span className="font-bold text-rose-400">Target</span>
          <span className="font-normal text-neutral-400">: </span>
          <span className="font-normal text-neutral-300">
            {isId ? SLIDE_02_COPY.pyramidStrategyRight.id : SLIDE_02_COPY.pyramidStrategyRight.en}
          </span>
        </div>
      </div>
    </div>
  );
};
