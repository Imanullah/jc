import React from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { cn } from '@/lib/utils';
import Vector from '@/assets/images/Vector.svg';
import { GradualSpacing } from '@/components/motion/GradualText';

gsap.registerPlugin(useGSAP);

type divProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type imgProps = React.ImgHTMLAttributes<HTMLImageElement>;

// w-[274px] h-[290px]

export default function HexagonImage({ className, ...props }: { className?: string } & imgProps & divProps) {
  return (
    <div className="relative flex flex-col items-center justify-center" {...props}>
      <div className="absolute z-10 flex flex-col gap-10 w-full h-full justify-center">
        {/* <GradualSpacing text="WA businesses feel confident about future growth" /> */}
        <span className="ptext opacity-0 flex justify-start text-neutral-50 text-sm tracking-tight">WA businesses feel confident about future growth</span>
        <span className="ptext opacity-0 flex justify-end text-neutral-50 text-sm tracking-tight">AI cant replace creativity</span>
        <span className="ptext opacity-0 flex justify-start text-neutral-50 text-sm tracking-tight">Sales measure true success</span>
        <span className="ptext opacity-0 flex justify-end text-neutral-50 text-sm tracking-tight">Human connection drives WA business</span>
        <span className="ptext opacity-0 flex justify-start text-neutral-50 text-sm tracking-tight">
          The primary barrier to digital
          <br /> transformation is financial investment
        </span>
      </div>
      <Image src={Vector} decoding="sync" width={0} height={0} alt="" className={cn('hexa-image', className)} priority />
    </div>
  );
}
