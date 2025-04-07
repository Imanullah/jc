'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import AppHeader from '@/components/AppHeader';
import { useFormStore } from '@/stores/formStore';
import { CheckButton } from '@/components/CustomButton';
import HexagonImageSmall from '@/components/HexagonImageSmall';

gsap.registerPlugin(useGSAP);

const useIsomorphicLayoutEffect = typeof window != 'undefined' ? useLayoutEffect : useEffect;

export default function StartingPage() {
  const { fname } = useFormStore();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (!fname) router.push('/form');
  }, [fname]);

  useGSAP(() => {
    gsap.to('.hexa', { rotateZ: '+=360', duration: 3, repeat: -1, ease: 'none' });
  }, []);

  return (
    <div className="flex flex-col h-dvh md:h-fit justify-between p-[20px]">
      <div>
        <AppHeader />
      </div>
      <div className="flex-1 flex-col items-center gap-5 py-[20px]">
        <HexagonImageSmall />
        <p className="text-[#FAFAFA] font-bagoss text-[19px] text-center">
          Thanks <span className="capitalize">{fname}</span>! Now, it's time to get a reallity check
        </p>
        <p className="text-[#FAFAFA] text-[19px] text-center">That will take 2-3 minutes</p>
      </div>
      <div className="pt-[20px] flex flex-col gap-5 ">
        <CheckButton onClick={() => console.log('Fisnish')} className="bg-primary-white text-black border-8 border-black/85 p-[13px]">
          Continue
        </CheckButton>
      </div>
    </div>
  );
}
