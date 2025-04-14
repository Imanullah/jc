'use client';
import { gsap } from 'gsap';
import { TransitionRouter } from 'next-transition-router';

export function TransitionPage({ children }: { children: React.ReactNode }) {

  return (
    <TransitionRouter
      leave={(next) => {
        // console.log(next);
        const tween = gsap.fromTo('.mytext', { autoAlpha: 1 }, { autoAlpha: 0, onComplete: next });
        return () => tween.kill();
      }}
      enter={(next) => {
        console.log(next);
        console.log('Enter')
        const tween = gsap.fromTo('.mytext', { autoAlpha: 0 }, { autoAlpha: 1, duration: 5, onComplete: next });
        return () => tween.kill();
      }}
    >
      {children}
    </TransitionRouter>
  );
}
