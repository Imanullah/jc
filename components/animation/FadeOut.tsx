'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import { cn } from '@/lib/utils';

export default function FadeOut({ children, className }: { children?: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const defaultClass = '';

  useGSAP(() => {
    gsap.fromTo(ref.current, {  autoAlpha: 0 }, { autoAlpha: 1, duration: 3, ease: 'expo.out' });
  }, []);

  return (
    <div ref={ref} className={cn(defaultClass, className)}>
      {children}
    </div>
  );
}
