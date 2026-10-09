import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { PRICING_PACKAGES } from './data';
import { getTierBadgeStyles } from './utils';

export const PricingPackagesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {PRICING_PACKAGES.map((pkg) => {
        const badgeStyles = getTierBadgeStyles(pkg.tierBadgeVariant);

        if (pkg.isFlagship) {
          return (
            <div 
              key={pkg.id}
              className="p-2.5 bg-[#0b0c12]/95 border-2 border-emerald-500 rounded-lg flex flex-col justify-start space-y-2 shadow-xl relative"
            >
              <div className="absolute -top-2 right-2 bg-emerald-600 text-white text-[8px] font-mono font-black px-1.5 py-0.2 rounded shadow">
                FLAGSHIP
              </div>
              <div className="space-y-1">
                <div className={`flex items-center justify-between ${badgeStyles.containerClass}`}>
                  <span className={`text-[8.5px] font-mono ${badgeStyles.badgeClass}`}>
                    {pkg.tierBadge}
                  </span>
                  <span className={`text-[9px] font-mono ${badgeStyles.nodeTextClass}`}>
                    {pkg.nodeRange}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-black text-white font-mono">
                    {pkg.name}
                  </h4>
                  <p className="text-[9.5px] text-neutral-400">{pkg.subtitle}</p>
                </div>
                <div className="py-0.5">
                  <span className="text-base font-black text-emerald-400 font-mono block">
                    <AnimatedCounter value={pkg.priceDisplay} />
                  </span>
                  <span className="text-[8.5px] text-neutral-400 font-mono">{pkg.priceSubtext}</span>
                </div>
                <div className="space-y-0.5 pt-1 border-t border-neutral-800 text-[10px] text-neutral-200">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className={feat.isStrong ? "font-semibold text-white" : ""}>
                        {feat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-1 border-t border-neutral-800 text-[9px] font-mono text-emerald-300 font-semibold">
                <span>{pkg.footerNote}</span>
              </div>
            </div>
          );
        }

        if (pkg.tierBadgeVariant === 'purple') {
          return (
            <div 
              key={pkg.id}
              className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded-lg flex flex-col justify-start space-y-2 shadow-md"
            >
              <div className="space-y-1">
                <div className={`flex items-center justify-between ${badgeStyles.containerClass}`}>
                  <span className={`text-[8.5px] font-mono ${badgeStyles.badgeClass}`}>
                    {pkg.tierBadge}
                  </span>
                  <span className={`text-[9px] font-mono ${badgeStyles.nodeTextClass}`}>
                    {pkg.nodeRange}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-mono">{pkg.name}</h4>
                  <p className="text-[9.5px] text-neutral-400">{pkg.subtitle}</p>
                </div>
                <div className="py-0.5">
                  <span className="text-sm font-extrabold text-purple-300 font-mono block">
                    <AnimatedCounter value={pkg.priceDisplay} />
                  </span>
                  <span className="text-[8.5px] text-neutral-500 font-mono">{pkg.priceSubtext}</span>
                </div>
                <div className="space-y-0.5 pt-1 border-t border-neutral-900 text-[10px] text-neutral-300">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                      <span>{feat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-1 border-t border-neutral-900 text-[9px] font-mono text-purple-400">
                {pkg.footerNote}
              </div>
            </div>
          );
        }

        // Entry tier
        return (
          <div 
            key={pkg.id}
            className="p-2.5 bg-[#0b0c12]/95 border border-neutral-800 rounded-lg flex flex-col justify-start space-y-2 shadow-md"
          >
            <div className="space-y-1">
              <div className={`flex items-center justify-between ${badgeStyles.containerClass}`}>
                <span className={`text-[8.5px] font-mono ${badgeStyles.badgeClass}`}>
                  {pkg.tierBadge}
                </span>
                <span className={`text-[9px] font-mono ${badgeStyles.nodeTextClass}`}>
                  {pkg.nodeRange}
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-mono">{pkg.name}</h4>
                <p className="text-[9.5px] text-neutral-400">{pkg.subtitle}</p>
              </div>
              <div className="py-0.5">
                <span className="text-sm font-extrabold text-neutral-200 font-mono block">{pkg.priceDisplay}</span>
                <span className="text-[8.5px] text-neutral-500 font-mono">{pkg.priceSubtext}</span>
              </div>
              <div className="space-y-0.5 pt-1 border-t border-neutral-900 text-[10px] text-neutral-300">
                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-neutral-500 shrink-0" />
                    <span>{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-1 border-t border-neutral-900 text-[9px] font-mono text-neutral-500">
              {pkg.footerNote}
            </div>
          </div>
        );
      })}
    </div>
  );
};
