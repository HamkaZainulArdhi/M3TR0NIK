import { useEffect, useState } from 'react';

type UseViewport = [number, number];

export function useViewport(): UseViewport {
  const [dimensions, setDimensions] = useState<UseViewport>([0, 0]);

  useEffect(() => {
    const handleResize = (): void => {
      setDimensions([window.innerHeight, window.innerWidth]);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
}
