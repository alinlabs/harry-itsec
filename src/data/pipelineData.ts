export interface PipelineStage {
  id: string;
  name: string;
  targetCount: number;
  modelledValueIdr: string; // clearly marked as modelled
  conversionRate: string;
  avgDurationDays: number;
  exitCriteria: string;
  salesLeadAction: string;
}

export const PROPOSED_90DAY_PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'prospect',
    name: 'Target Universe / Sourced',
    targetCount: 120,
    modelledValueIdr: 'IDR 48.0 B (Pool)',
    conversionRate: '50% to Qualify',
    avgDurationDays: 7,
    exitCriteria: 'Verified ICP fit, security contact identified, verified regulatory pressure',
    salesLeadAction: 'I would map C-level contacts and leverage ITSEC Asia existing client footprint for warm intro'
  },
  {
    id: 'qualified',
    name: 'Qualified Account',
    targetCount: 60,
    modelledValueIdr: 'IDR 24.0 B',
    conversionRate: '60% to Discovery',
    avgDurationDays: 10,
    exitCriteria: 'Active pentest budget or compliance deadline within 3–6 months confirmed',
    salesLeadAction: 'I would qualify BANT criteria (Budget, Authority, Need, Timeline) and schedule technical briefing'
  },
  {
    id: 'discovery',
    name: 'Discovery & Threat Briefing',
    targetCount: 36,
    modelledValueIdr: 'IDR 14.4 B',
    conversionRate: '66% to Demo',
    avgDurationDays: 10,
    exitCriteria: 'Agreed attack surface scope, documented pain with current testing frequency',
    salesLeadAction: 'I would present Bronyx autonomous architecture vs point-in-time pentest limitations'
  },
  {
    id: 'demo',
    name: 'Tailored Technical Demo',
    targetCount: 24,
    modelledValueIdr: 'IDR 9.6 B',
    conversionRate: '58% to PoC',
    avgDurationDays: 7,
    exitCriteria: 'Security team agrees to run 5-day scoped PoC on non-production or staging target',
    salesLeadAction: 'I would run live Kali agent orchestration showcase and demonstrate zero blast radius safety'
  },
  {
    id: 'poc',
    name: 'Scoped Live PoC (5-7 Days)',
    targetCount: 14,
    modelledValueIdr: 'IDR 5.6 B',
    conversionRate: '64% to Proposal',
    avgDurationDays: 12,
    exitCriteria: 'Bronyx uncovers exploitable vulnerability validated by client with instant remediation code',
    salesLeadAction: 'I would lead executive debrief with CISO presenting automated vs manual pentest ROI'
  },
  {
    id: 'proposal',
    name: 'Enterprise Proposal / RFP',
    targetCount: 9,
    modelledValueIdr: 'IDR 3.6 B',
    conversionRate: '66% to Negotiation',
    avgDurationDays: 14,
    exitCriteria: 'Commercial pricing accepted, submitted to procurement and legal compliance',
    salesLeadAction: 'I would present multi-target annual subscription tiers alongside ITSEC managed services option'
  },
  {
    id: 'negotiation',
    name: 'Procurement & Negotiation',
    targetCount: 6,
    modelledValueIdr: 'IDR 2.4 B',
    conversionRate: '66% to Won',
    avgDurationDays: 15,
    exitCriteria: 'Final SLA agreed, contract sign-off by legal and C-level executive',
    salesLeadAction: 'I would resolve legal terms (liability, data residency, safe-exploitation limits) and close agreement'
  },
  {
    id: 'won',
    name: 'Closed Won (Initial 90-Day ARR)',
    targetCount: 4,
    modelledValueIdr: 'IDR 1.6 B (Seed ARR)',
    conversionRate: '100%',
    avgDurationDays: 0,
    exitCriteria: 'Signed enterprise contract, customer onboarding, initial platform deployment',
    salesLeadAction: 'I would conduct kickoff with Customer Success and establish expansion plan for additional assets'
  }
];

export const PIPELINE_FUNNEL_METRICS = {
  modelType: 'PROPOSED 90-DAY OPERATING MODEL',
  targetQuarterCoverage: '3.5x - 4.0x Pipeline Coverage Ratio',
  targetAverageDealSizeIdr: 'IDR 400M - 600M Annual Recurring Revenue (ARR)',
  projectedSalesCycleDays: '45 - 60 Days (vs Traditional 90 - 120 Days)',
  keyVelocityDriver: 'Autonomous 5-Day PoC proving exploitability faster than manual consultation'
};
