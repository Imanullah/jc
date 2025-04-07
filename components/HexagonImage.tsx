'use client';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { cn } from '@/lib/utils';
import Vector from '@/assets/images/Vector.svg';


gsap.registerPlugin(useGSAP);

const useIsomorphicLayoutEffect = typeof window != 'undefined' ? useLayoutEffect : useEffect;

export default function HexagonImage({ className, ...props }: { className?: string }) {

  const refContainer = useRef(null);
  const refVector = useRef(null);

  const defaultClass = 'v-image w-[274px] h-[290px]';

  return (
    <div ref={refContainer} className="relative flex flex-col items-center justify-center" {...props}>
      <div className="absolute z-10 flex flex-col gap-10 w-full h-full justify-center">
        <span className="ptext opacity-0 flex justify-start text-neutral-50 text-sm tracking-tight">WA businesses feel confident about future growth</span>
        <span className="ptext opacity-0 flex justify-end text-neutral-50 text-sm tracking-tight">AI cant replace creativity</span>
        <span className="ptext opacity-0 flex justify-start text-neutral-50 text-sm tracking-tight">Sales measure true success</span>
        <span className="ptext opacity-0 flex justify-end text-neutral-50 text-sm tracking-tight">Human connection drives WA business</span>
        <span className="ptext opacity-0 flex justify-start text-neutral-50 text-sm tracking-tight">
          The primary barrier to digital
          <br /> transformation is financial investment
        </span>
      </div>

      <Image ref={refVector} src={Vector} width={0} height={0} alt="" className={cn(defaultClass, className)} priority />
    </div>
  );
}
