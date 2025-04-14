import React, { ButtonHTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type divProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const RoundedButton = ({ children, icon, alt, className, isPending, ...props }: { children?: React.ReactNode;  alt?: string, className?: string; icon?: string | StaticImageData; isPending?: boolean } & ButtonProps) => {
  const defaultClass = 'bg-white/5 w-[46px] h-[46px] flex items-center justify-center backdrop-blur-[60px] relative overflow-hidden  rounded-full shadow-[0_4px_20px_0_rgba(0, 0, 0, 0.05)] cursor-pointer';
  return (
    <button type="button" className={cn(defaultClass, className)} {...props}>
      {icon && <Image src={icon} alt={alt ?? ''} className="w-[20px] h-[20px]" priority />}
      {children}
    </button>
  );
};

export const SmallRoundedButton = ({ children, className, icon, isPending, alt = '', ...props }: { children?: React.ReactNode; className?: string; icon?: string | StaticImageData; isPending?: boolean; alt?: string } & ButtonProps) => {
  const defaultClass = 'bg-white/60 opacity-50 rounded-full p-2 cursor-pointer';
  return (
    // <button type="button" className={cn(defaultClass, className)} {...props}>
    //   {icon && <Image src={icon} alt={alt} className="w-[20px] h-[20px]" priority />}
    //   {children}
    // </button>

    <button className={cn(defaultClass, className)} {...props}>
      {icon && <Image src={icon} alt="" className="w-[15px]" />}
      {children}
    </button>
  );
};

export const CheckButton = ({ children, className, isPending, ...props }: { children?: React.ReactNode; className?: string; isPending?: boolean } & ButtonProps) => {
  const defaultClass = 'bg-primary font-normal tracking-[0.32px] text-base w-full p-[20px] rounded-[19px] cursor-pointer';
  return (
    <button type="button" className={cn(defaultClass, className)} {...props}>
      {children}
    </button>
  );
};

export const GetStartButton = ({ children, className, isPending, ...props }: { children?: React.ReactNode; className?: string; isPending?: boolean } & ButtonProps) => {
  const defaultClass = 'bg-primary-white text-black border-8 border-black/85 font-normal tracking-[0.32px] text-base w-full p-[20px] rounded-[19px] cursor-pointer';
  return (
    <button type="button" className={cn(defaultClass, className)} {...props}>
      {children}
    </button>
  );
};
