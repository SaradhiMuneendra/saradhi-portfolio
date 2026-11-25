
import { useEffect, useRef, useState } from 'react';

export default function useScrollAnimation() {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
}
