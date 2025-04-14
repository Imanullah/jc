'use client';
import React from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useFormStore } from '@/stores/formStore';
import { CheckButton } from '@/components/buttons/CustomButton';

export default function page() {
  const { fname } = useFormStore();
  // const router = useRouter();

  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex flex-col items-center space-y-14 py-[20px]">
        <ViewTransition name="hexa-image">
          <DotLottieReact src="/JB2G_Lottie.lottie" autoplay loop className="hexa w-20" />
        </ViewTransition>
        <ViewTransition name="front-text">
          <div className="pb-20">
            <p className="text-[#FAFAFA] font-bagoss text-[19px] text-center">
              Thanks <span className="capitalize">{fname ? fname : '__'}</span>! Now, it's time to get a reallity check
            </p>
            <p className="text-[#FAFAFA] text-[19px] text-center">That will take 2-3 minutes</p>
          </div>
        </ViewTransition>
      </div>
      <div className="flex flex-col gap-5">
        <ViewTransition name="form-bottom">
          <CheckButton onClick={() => console.log('Fisnish')} className="bg-primary-white text-black border-8 border-black/85 p-[13px]">
            Continue
          </CheckButton>
        </ViewTransition>
      </div>
    </div>
  );
}
