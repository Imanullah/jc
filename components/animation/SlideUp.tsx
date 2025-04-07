'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import { cn } from '@/lib/utils';

export default function SlideUp({ children, className }: { children?: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const defaultClass = '';

  useGSAP(() => {
    gsap.fromTo(ref.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5, ease: 'expo.out' });
  }, []);

  return (
    <div ref={ref} className={cn(defaultClass, className)}>
      {children}
    </div>
  );
}
