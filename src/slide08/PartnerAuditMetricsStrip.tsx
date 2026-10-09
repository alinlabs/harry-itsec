import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { PARTNERSHIP_AUDIT_METRICS } from '../data/partnershipData';

export const PartnerAuditMetricsStrip: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      <div className="p-2 bg-neutral-900/90 border border-neutral-800 rounded flex flex-col justify-between">
        <span className="text-[10px] font-mono text-neutral-400 uppercase">Total Mitra Terverifikasi</span>
        <div className="flex items-baseline gap-1 my-0.5">
          <span className="text-lg font-black text-white">{PARTNERSHIP_AUDIT_METRICS.totalPartnersEvaluated}</span>
          <span className="text-[10px] text-emerald-400 font-mono">Entitas SI/Distro</span>
        </div>
        <span className="text-[9px] text-neutral-400">Database lengkap non-kompetitor</span>
      </div>

      <div className="p-2 bg-neutral-900/90 border border-neutral-800 rounded flex flex-col justify-between">
        <span className="text-[10px] font-mono text-neutral-400 uppercase">System Integrator Target</span>
        <div className="flex items-baseline gap-1 my-0.5">
          <span className="text-lg font-black text-rose-400">{PARTNERSHIP_AUDIT_METRICS.enterpriseSystemIntegrators}</span>
          <span className="text-[10px] text-neutral-300 font-mono">Tier-1 & Specialized</span>
        </div>
        <span className="text-[9px] text-neutral-400">Multipolar, Mastersystem, RDS, Kirana, SMI</span>
      </div>

      <div className="p-2 bg-neutral-900/90 border border-neutral-800 rounded flex flex-col justify-between">
        <span className="text-[10px] font-mono text-neutral-400 uppercase">Distributor & Hyperscalers</span>
        <div className="flex items-baseline gap-1 my-0.5">
          <span className="text-lg font-black text-amber-400">
            {PARTNERSHIP_AUDIT_METRICS.nationalDistributors + PARTNERSHIP_AUDIT_METRICS.hyperscalersAndAdvisory}
          </span>
          <span className="text-[10px] text-neutral-300 font-mono">Kanal Nasional</span>
        </div>
        <span className="text-[9px] text-neutral-400">CTI Group, ACA Pacific, AWS, GCP</span>
      </div>

      <div className="p-2 bg-neutral-900/90 border border-emerald-900/60 rounded flex flex-col justify-between">
        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          Eliminasi Kompetitor
        </span>
        <div className="flex items-baseline gap-1 my-0.5">
          <span className="text-lg font-black text-emerald-400">100%</span>
          <span className="text-[10px] text-emerald-300 font-mono">Strict Exclusion</span>
        </div>
        <span className="text-[9px] text-emerald-400/90 font-mono">Grup Kompetitor & Afiliasi Total Dieliminasi</span>
      </div>
    </div>
  );
};
