'use client';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, TextPlugin);


export default function FrontText({ className }: { className?: string }) {
  const splitText = 'Compare your thoughts on technology with current industry opinions';

  useGSAP(() => {
    const tl = gsap.timeline({ yoyo: true });
    tl.to('p .first', { duration: 2, text: { value: 'Compare your thoughts on ' } });
    tl.to('p .gradient', {
      duration: 2,
      text: { value: 'technology ', newClass: 'bg-gradient-to-r from-[#f9bbff] inline-block to-purple-500 text-transparent bg-clip-text' },
    });
    tl.to('p .last', { duration: 2, text: { value: ' with current industry opinions ' } });
  }, []);

  return (
    <div className={cn('flex flex-col', className)}>
      <p className="font-bagoss text-[30px] text-neutral-50 text-center leading-[1.2] tracking-tight">
        <span className="first"></span>
        <span className="gradient"></span>
        <span className="last"></span>
      </p>
    </div>
  );
}
