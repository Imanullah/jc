'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { CheckButton } from '@/components/CustomButton';
import HexagonImage from '@/components/HexagonImage';
import SlideUp from '@/components/animation/SlideUp';
import FadeOut from '@/components/animation/FadeOut';

const useIsomorphicLayoutEffect = typeof window != 'undefined' ? useLayoutEffect : useEffect;

gsap.registerPlugin(useGSAP);

export default function HomePage() {
  const router = useRouter();

  const handleRoute = (url: string) => {
    const tl = gsap.timeline({ paused: true, onComplete: () => onPageExit() });
    tl.add('start');
    tl.to('.v-image', { scale: 0.6, duration: 2 }, 'start');
    tl.fromTo('.ptext', { y: 0, autoAlpha: 1 }, { y: -10, autoAlpha: 0, duration: 2 }, 'start');
    tl.play();

    const onPageExit = () => {
      router.push(url);
    };
  };

  useIsomorphicLayoutEffect(() => {
    gsap.set('.v-image', { scale: -0.6, duration: 0 });
  });

  useGSAP(() => {
    gsap.to('.v-image', { scale: 1 });
    gsap.fromTo('.v-image', { opacity: 0 }, { opacity: 1, duration: 5 });
    gsap.fromTo('.ptext', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 3, ease: 'bounce.out', stagger: 0.3 });
  }, []);

  return (
    <div className="flex flex-col h-[calc(100dvh-50px)] md:h-fit justify-between p-[20px]">
      <div className="">
        <HexagonImage />
        <div className="pb-[20px] pt-[40px] px-1">
          <SlideUp>
            <p className="front-text font-bagoss text-[30px] text-neutral-50 text-center leading-[1.2] tracking-tight">
              Compare your thoughts on <span className="bg-gradient-to-r from-[#f9bbff] inline-block to-purple-500 text-transparent bg-clip-text">technology</span> with current industry opinions.
            </p>
          </SlideUp>
        </div>
      </div>
      <div className="py-[20px]">
        <FadeOut>
          <CheckButton onClick={() => handleRoute('/check')} className="btn-check">
            Get reality check
          </CheckButton>
        </FadeOut>
      </div>
    </div>
  );
}
