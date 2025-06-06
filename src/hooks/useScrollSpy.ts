
import { useState, useEffect, useRef } from 'react';

const useScrollSpy = (sectionIds: string[], offsetPx: number = 0) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const normalizedOffsetPx = Math.max(0, offsetPx); 
    
    const observerOptions: IntersectionObserverInit = {
      root: null, 
      rootMargin: `-${normalizedOffsetPx}px 0px 0px 0px`,
      threshold: 0, 
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        
        if (entry.isIntersecting && entry.boundingClientRect.top <= normalizedOffsetPx + 1) { // Pequeño ajuste de +1px para tolerancia
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, offsetPx]);

  return activeSection;
};

export default useScrollSpy;