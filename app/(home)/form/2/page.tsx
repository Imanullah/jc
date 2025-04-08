'use client';
import { useRouter } from 'next/navigation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import AppHeader from '@/components/AppHeader';
import { useFormStore } from '@/stores/formStore';
import { CheckButton } from '@/components/CustomButton';


export default function StartingPage() {
  const { fname } = useFormStore();
  const router = useRouter();

  // useGSAP(() => {
  //   gsap.to('.hexa', { rotateZ: '+=360', duration: 3, repeat: -1, ease: 'none' });
  // }, []);

  return (
    <div className="flex flex-col h-dvh md:h-fit p-[20px]">
      <div>
        <AppHeader routeBack="/form/1" />
      </div>
      <div className="flex-1 flex flex-col items-center gap-5 py-[20px]">
        <DotLottieReact src="/JB2G_Lottie.lottie" autoplay loop style={{ width: '60px', height: 'auto' }} />
        <div className="pb-20">
          <p className="text-[#FAFAFA] font-bagoss text-[19px] text-center">
            Thanks <span className="capitalize">{fname ? fname : '__'}</span>! Now, it's time to get a reallity check
          </p>
          <p className="text-[#FAFAFA] text-[19px] text-center">That will take 2-3 minutes</p>
        </div>
      </div>
      <div className="pt-[20px] flex flex-col gap-5 ">
        <CheckButton onClick={() => console.log('Fisnish')} className="bg-primary-white text-black border-8 border-black/85 p-[13px]">
          Continue
        </CheckButton>
      </div>
    </div>
  );
}
