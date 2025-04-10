'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';

import { cn, useIsomorphicLayoutEffect } from '@/lib/utils';
import AppHeader from '@/components/AppHeader';
import { useBaseContext } from '@/providers/BaseProvider';
import HexagonImage from '@/components/HexagonImage';
import SwiperComponent from '@/components/SwiperComponent';
import { CheckButton } from '@/components/CustomButton';

export default function CheckPage() {
  const { isAction, setIsAction, setIsActive } = useBaseContext();
  const router = useRouter();

  const onCheckPage = (url: string) => {
    gsap.fromTo('.v-image', { y: 0 }, { scale: -0.1, y: -110, duration: 1.5, onComplete: () => onPageExit() });
    setIsActive(false);
    setIsAction(false);

    const onPageExit = () => {
      router.push(url);
    };
  };

  useIsomorphicLayoutEffect(() => {
    gsap.set('.v-image', { scale: -0.6, duration: 0 });
  });

  useGSAP(() => {
    gsap.fromTo('.v-image', { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 });
  }, []);

  return (
    <div className="flex flex-col h-dvh md:h-fit justify-between p-[20px]">
      <div>
        <AppHeader />
      </div>
      <div className="flex-1">
        <HexagonImage />
        <SwiperComponent />
      </div>
      <div className="pt-[20px] flex flex-col gap-5 ">
        <div className="pagination-swipe flex justify-center py-[20px]"></div>

        <CheckButton className={cn('next-el bg-transparent text-white border border-neutral-50', { hidden: isAction })}>Continue</CheckButton>
        <CheckButton onClick={() => onCheckPage('/form')} className={cn('bg-primary-white text-black border-8 border-black/85 p-[13px]', { hidden: !isAction })}>
          Get Start
        </CheckButton>
      </div>
    </div>
  );
}
