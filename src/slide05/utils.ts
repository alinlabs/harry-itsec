import { PipelineAccount, PipelineStageKey, PipelineCalculatedMetrics } from './types';
import { PIPELINE_STAGES } from '../data/pipelineModelData';

export const getStageLabelMap = (isId: boolean): Record<PipelineStageKey, string> => ({
  prospect: isId ? 'Prospek' : 'Prospect',
  qualified: isId ? 'Terkualifikasi' : 'Qualified',
  discovery: isId ? 'Discovery' : 'Discovery',
  demo: isId ? 'Demo Teknis' : 'Demo',
  poc: isId ? 'PoC (5 Hari)' : 'PoC (5-Day)',
  proposal: isId ? 'Proposal' : 'Proposal',
  negotiation: isId ? 'Negosiasi' : 'Negotiation',
  won: isId ? 'Dimenangkan' : 'Won'
});

export const calculatePipelineMetrics = (
  accounts: PipelineAccount[],
  isId: boolean
): PipelineCalculatedMetrics => {
  const totalPipelineValueMillions = accounts.reduce((sum, a) => sum + a.dealValueIdrMillions, 0);

  const qualifiedValueMillions = accounts
    .filter(a => a.stage !== 'prospect')
    .reduce((sum, a) => sum + a.dealValueIdrMillions, 0);

  const activeOppsCount = accounts.filter(a => a.stage !== 'won').length;
  const wonAccounts = accounts.filter(a => a.stage === 'won');
  const wonValueMillions = wonAccounts.reduce((sum, a) => sum + a.dealValueIdrMillions, 0);

  const weightedValueMillions = accounts.reduce((sum, a) => {
    const stageConfig = PIPELINE_STAGES.find(s => s.key === a.stage);
    const weight = stageConfig ? stageConfig.probabilityWeight : 0.2;
    return sum + a.dealValueIdrMillions * weight;
  }, 0);

  const targetMonthlyQuotaMillions = 3000;
  const coverageRatio = (totalPipelineValueMillions / targetMonthlyQuotaMillions).toFixed(1);

  const formatIdr = (valMil: number) => {
    const bVal = (valMil / 1000).toFixed(1).replace('.', ',');
    return isId ? `Rp ${bVal} M` : `IDR ${(valMil / 1000).toFixed(2)} B`;
  };

  return {
    totalValueIdr: formatIdr(totalPipelineValueMillions),
    qualifiedValueIdr: formatIdr(qualifiedValueMillions),
    activeOppsCount,
    wonCount: wonAccounts.length,
    wonValueIdr: formatIdr(wonValueMillions),
    weightedValueIdr: formatIdr(weightedValueMillions),
    coverageRatio: `${coverageRatio}x`
  };
};
