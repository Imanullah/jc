'use client';
import React from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useBaseContext } from '@/providers/BaseProvider';
import HexagonImage from '@/components/HexagonImage';
import SwiperComponent from '@/components/SwiperComponent';
import { CheckButton } from '@/components/buttons/CustomButton';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

export default function CheckPage() {
  const { isAction } = useBaseContext();
  const router = useRouter();

  useGSAP(() => {
    gsap.set('.hexa-image', { scale: 0.6 });
    gsap.fromTo('.hexa-image', { y: 0, autoAlpha: 0 }, { autoAlpha: 1, duration: 5 });
  }, []);

  const onCheckPage = (path: string) => {
    router.prefetch(path);
    gsap.fromTo('.hexa-image', { y: 0, opacity: 1 }, { scale: 0.15, autoAlpha: 1, duration: 2, onComplete: () => router.push(path) });
  };

  // className = 'w-[150px] h-[180px]';
  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex flex-col">
        <ViewTransition name="hexa-image">
          <HexagonImage />
        </ViewTransition>
        <SwiperComponent />
      </div>
      <div className="flex flex-col gap-5">
        <div className="pagination-swipe flex justify-center py-[20px]"></div>
        <ViewTransition name="check-button">
          <CheckButton className={cn('next-el bg-transparent text-white border border-neutral-50', { hidden: isAction })}>Continue</CheckButton>
        </ViewTransition>
        <ViewTransition name="form-bottom">
          <CheckButton onClick={() => onCheckPage('/form')} className={cn('bg-primary-white text-black border-8 border-black/85 p-[13px]', { hidden: !isAction })}>
            Get Start
          </CheckButton>
        </ViewTransition>
      </div>
    </div>
  );
}
