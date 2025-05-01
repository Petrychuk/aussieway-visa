import { useEffect, useState } from 'react';

export default function useIsDesktop(breakpoint = 992) {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= breakpoint);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= breakpoint);
    window.addEventListener('resize', update);
    update();

    return () => window.removeEventListener('resize', update);
  }, [breakpoint]);

  return isDesktop;
}
