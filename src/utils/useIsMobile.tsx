import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  // Initialize `isMobile` to `false` (or `null` if desired) to avoid SSR issues.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Guard for SSR

    // Check if the viewport width is mobile
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    const handleChange = () => setIsMobile(mediaQuery.matches);

    // Set the initial value and listen for changes
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isMobile;
};
