import React, { useEffect, useState, useMemo } from 'react';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number; // duration in ms, default 3000ms (3 seconds)
  className?: string;
}

interface NumberToken {
  target: number;
  usesComma: boolean;
  decimalsCount: number;
  hasPlus: boolean;
  index: number;
  length: number;
}

/**
 * Extracts numeric tokens from a formatted string (supports integers, decimals with comma or dot, and plus sign).
 */
function parseTokens(str: string): { tokens: NumberToken[]; initialStr: string } {
  // Regex matches numbers with optional +/- sign and optional decimal (. or ,)
  const regex = /([+\-]?\d+(?:[.,]\d+)?)/g;
  const tokens: NumberToken[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(str)) !== null) {
    const rawMatch = match[0];
    const hasPlus = rawMatch.startsWith('+');
    const hasMinus = rawMatch.startsWith('-');
    const signLess = rawMatch.replace(/^[+\-]/, '');
    const usesComma = signLess.includes(',');
    const parsed = parseFloat(signLess.replace(',', '.'));

    if (!isNaN(parsed)) {
      const decimalsCount = (signLess.split(/[.,]/)[1] || '').length;
      tokens.push({
        target: hasMinus ? -parsed : parsed,
        usesComma,
        decimalsCount,
        hasPlus,
        index: match.index,
        length: rawMatch.length,
      });
    }
  }

  if (tokens.length === 0) {
    return { tokens: [], initialStr: str };
  }

  // Construct initial 0 string
  let initialStr = '';
  let lastIdx = 0;
  for (const token of tokens) {
    initialStr += str.slice(lastIdx, token.index);
    const zeroNum = token.decimalsCount > 0
      ? (token.usesComma ? `0,${'0'.repeat(token.decimalsCount)}` : `0.${'0'.repeat(token.decimalsCount)}`)
      : '0';
    initialStr += (token.hasPlus ? '+' : '') + zeroNum;
    lastIdx = token.index + token.length;
  }
  initialStr += str.slice(lastIdx);

  return { tokens, initialStr };
}

/**
 * AnimatedCounter parses numeric values from formatted strings
 * and smoothly animates from 0 to the target number over exactly 3 seconds (3000ms)
 * using requestAnimationFrame with synchronized cubic ease-out.
 * Guarantees that all numbers finish and stop at the exact same millisecond.
 * Fully preserves original formatting, prefixes, and suffixes.
 * Respects prefers-reduced-motion.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 3000,
  className
}) => {
  const rawStr = useMemo(() => String(value).trim(), [value]);
  const { tokens, initialStr } = useMemo(() => parseTokens(rawStr), [rawStr]);

  // Initial state ALWAYS begins at 0 representation
  const [displayValue, setDisplayValue] = useState<string>(() => initialStr);

  useEffect(() => {
    // If no numbers found, display raw string
    if (tokens.length === 0) {
      setDisplayValue(rawStr);
      return;
    }

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(rawStr);
      return;
    }

    // Always reset to 0 representation at start of animation
    setDisplayValue(initialStr);

    let startTime: number | null = null;
    let animFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Harmonized ease-out cubic for synchronized, fluid deceleration across 3.0 seconds
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      // When 3.0 seconds is reached, all counters simultaneously complete
      if (progress >= 1) {
        setDisplayValue(rawStr);
        return;
      }

      let currentStr = '';
      let lastIdx = 0;

      for (const token of tokens) {
        currentStr += rawStr.slice(lastIdx, token.index);
        const currentVal = token.target * easeProgress;
        let formattedVal = token.usesComma
          ? currentVal.toFixed(token.decimalsCount).replace('.', ',')
          : currentVal.toFixed(token.decimalsCount);

        // Prevent premature completion: do not let rounding hit the final target value until progress reaches 1.0 (at 3.0 seconds)
        const targetFormatted = token.usesComma
          ? token.target.toFixed(token.decimalsCount).replace('.', ',')
          : token.target.toFixed(token.decimalsCount);

        if (formattedVal === targetFormatted && Math.abs(token.target) > 0) {
          const stepDelta = Math.pow(10, -token.decimalsCount);
          const prevVal = token.target > 0
            ? Math.max(0, token.target - stepDelta)
            : Math.min(0, token.target + stepDelta);
          formattedVal = token.usesComma
            ? prevVal.toFixed(token.decimalsCount).replace('.', ',')
            : prevVal.toFixed(token.decimalsCount);
        }

        // Avoid negative zero
        if (formattedVal.startsWith('-0') && Math.abs(currentVal) < 0.0001) {
          formattedVal = formattedVal.replace('-', '');
        }

        const sign = token.hasPlus && currentVal > 0 ? '+' : '';
        currentStr += sign + formattedVal;
        lastIdx = token.index + token.length;
      }
      currentStr += rawStr.slice(lastIdx);

      setDisplayValue(currentStr);

      animFrameId = requestAnimationFrame(step);
    };

    animFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrameId);
  }, [rawStr, initialStr, tokens, duration]);

  return <span className={className}>{displayValue}</span>;
};
