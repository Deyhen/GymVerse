import { useState, useEffect } from 'react';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export const breakpointsWithMax: Record<Breakpoint, string> = {
  xs: '(min-width: 360px) and (max-width: 479px)',
  sm: '(min-width: 480px) and (max-width: 599px)',
  md: '(min-width: 600px) and (max-width: 767px)',
  lg: '(min-width: 768px) and (max-width: 1023px)',
  xl: '(min-width: 1024px) and (max-width: 1279px)',
  '2xl': '(min-width: 1280px) and (max-width: 1439px)',
  '3xl': '(min-width: 1440px)',
};

export const breakpoints: Record<Breakpoint, string> = {
  xs: '(min-width: 360px)',
  sm: '(min-width: 480px)',
  md: '(min-width: 600px)',
  lg: '(min-width: 768px)',
  xl: '(min-width: 1024px)',
  '2xl': '(min-width: 1280px)',
  '3xl': '(min-width: 1440px)',
};

export const useMediaQuery = (
  breakpoint: Breakpoint,
  options?: { withMaxValue?: boolean }
) => {
  const mediaQuery = options?.withMaxValue
    ? breakpointsWithMax[breakpoint]
    : breakpoints[breakpoint];
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const match = window.matchMedia(mediaQuery).matches;
      setMatches(match);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mediaQuery]);

  return matches;
};
