/**
 * Utility functions for currency and number formatting in Indonesian and English versions.
 * Rules for Bahasa Indonesia:
 * - Billion / Miliar -> "M" (e.g. "$2,71 M USD", "Rp 325 M", "Rp 24,0 M")
 * - Million / Juta -> "Jt" (e.g. "$165 Jt USD", "Rp 450 Jt", "$340 Jt USD+", "400 Jt+")
 * - Trillion / Triliun -> "T" (e.g. "Rp 42,0 T")
 */

export function formatCurrency(str: string, isId: boolean): string {
  if (!str) return '';

  // Clean USD if $ is present (per specification: if $ is present, USD is redundant)
  let result = str;
  if (result.includes('$')) {
    result = result.replace(/\s*USD\b/gi, '');
  }

  if (!isId) return result;

  // Single-pass replacement for USD expressions ($2.71 Billion, $2.71B, $165 Million, $165M, $340M+)
  result = result.replace(/\$([0-9.,]+)\s*([A-Za-z+]+)?/g, (match, val, unit) => {
    const num = val.replace('.', ',');
    if (!unit) return `$${num}`;
    const u = unit.toUpperCase();
    if (u === 'B' || u === 'BILLION') {
      return `$${num} M`;
    }
    if (u === 'M' || u === 'MILLION') {
      return `$${num} Jt`;
    }
    if (u === 'M+' || u === 'MILLION+') {
      return `$${num} Jt+`;
    }
    return `$${num} ${unit}`;
  });

  // Single-pass replacement for IDR expressions (IDR 325 B, IDR 325B, IDR 42.0 Trillion, IDR 450M)
  result = result.replace(/IDR\s*([0-9.,]+)\s*([A-Za-z]+)?/gi, (match, val, unit) => {
    const num = val.replace('.', ',');
    if (!unit) return `Rp ${num}`;
    const u = unit.toUpperCase();
    if (u === 'B' || u === 'BILLION') {
      return `Rp ${num} M`;
    }
    if (u === 'M' || u === 'MILLION') {
      return `Rp ${num} Jt`;
    }
    if (u === 'TRILLION' || u === 'T') {
      return `Rp ${num} T`;
    }
    return `Rp ${num} ${unit}`;
  });

  // Terms replacement
  result = result.replace(/(\d+)\s*Accounts/gi, '$1 Akun');
  result = result.replace(/(\d+)\s*Deals/gi, '$1 Deal');
  result = result.replace(/(\d+)M\+/g, '$1 Jt+');

  return result;
}

export function formatAmountNumber(valInMillions: number, isId: boolean): string {
  if (valInMillions >= 1000) {
    const valInBillions = (valInMillions / 1000).toFixed(1).replace('.', ',');
    return isId ? `Rp ${valInBillions} M` : `IDR ${(valInMillions / 1000).toFixed(1)}B`;
  } else {
    return isId ? `Rp ${valInMillions} Jt` : `IDR ${valInMillions}M`;
  }
}
