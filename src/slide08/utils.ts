import { PartnerCandidate } from '../data/partnershipData';

export const filterPartners = (
  partners: PartnerCandidate[],
  category: string,
  query: string
): PartnerCandidate[] => {
  return partners.filter((p) => {
    const matchesCategory =
      category === 'ALL' ||
      (category === 'TIER1_SI' && p.tierStatus === 'TIER-1 STRATEGIC SI') ||
      (category === 'TIER2_SI' && p.tierStatus === 'TIER-2 GROWTH SI') ||
      (category === 'DISTRIBUTOR' && p.tierStatus === 'NATIONAL DISTRIBUTOR') ||
      (category === 'CLOUD_ADVISORY' &&
        (p.tierStatus === 'CLOUD HYPERSCALER' || p.tierStatus === 'GOVERNANCE ADVISORY'));

    const lowerQuery = query.toLowerCase().trim();
    const matchesSearch =
      !lowerQuery ||
      p.name.toLowerCase().includes(lowerQuery) ||
      p.shortName.toLowerCase().includes(lowerQuery) ||
      p.primarySectorFocus.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery);

    return matchesCategory && matchesSearch;
  });
};
