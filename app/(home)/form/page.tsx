'use client';
import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HexagonImageSmall from '@/components/HexagonImageSmall';
import { useForm, SubmitHandler } from 'react-hook-form';
import gsap from 'gsap';
import useDetectKeyboardOpen from 'use-detect-keyboard-open';

import { cn, useIsomorphicLayoutEffect } from '@/lib/utils';
import AppHeader from '@/components/AppHeader';
import Arrowup from '@/assets/icons/arrow_up.png';
import { useFormStore } from '@/stores/formStore';
import { useRouter } from 'next/navigation';
import { SmallRoundedButton } from '@/components/CustomButton';

type TForm = {
  fname: string;
  email: string;
};

const nameValidation = {
  required: 'First name is required',
  pattern: {
    value: /^[a-zA-Z]+[ a-zA-Z]*$/i,
    message: 'Please enter a valid name',
  },
};

export default function FormPage() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isValid },
  } = useForm<TForm>();

  const { setFname } = useFormStore((state) => state);
  const router = useRouter();
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [lottiePlay, setLottiePaly] = useState(false)

  const onSubmit: SubmitHandler<TForm> = (data) => {
    if (isValid) {
      gsap.to('.hexa', {
        rotateZ: 360,
        duration: 1,
        onComplete: () => submitComplete(),
      });

      const submitComplete = () => {
        setFname(data.fname);
        reset();
        router.push('/form/1');
      };
    }
  };

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo('.hexa', { opacity: 0 }, { opacity: 1, duration: 3 });
    setFocus('fname');
  }, []);

  useEffect(() => {
    if (isKeyboardOpen) {
      setKeyboardVisible(true);
    } else if (!isKeyboardOpen) {
      setKeyboardVisible(false);
    }
  }, [isKeyboardOpen]);

  return (
    <div className="flex flex-col h-dvh md:h-fit p-[20px]">
      <div>
        <AppHeader routeBack="/check" />
      </div>
      <div className={cn('shrink flex flex-col items-center gap-5 py-[20px]', { 'flex-1': !isKeyboardVisible })}>
        <DotLottieReact src="/JB2G_Lottie.lottie" autoplay={lottiePlay} className="hexa w-16" />
        <p className="text-[#FAFAFA] font-bagoss text-[19px] text-center pb-20">Let's start with the basics. Type in your first name.</p>
      </div>
      <div className="pt-[20px] flex flex-col gap-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex items-center">
            <SmallRoundedButton icon={Arrowup} className="absolute right-0 mr-3" type="submit" />

            <input type="text" {...register('fname', nameValidation)} name="fname" placeholder="First Name" className={cn('h-[60px] w-full border border-white/60 text-white p-2 rounded-[18px] outline-none', { 'border-red-400 text-red-400': errors?.fname })} />
          </div>
          {errors?.fname && <p className="text-xs text-red-400 p-2">{errors?.fname.message}</p>}
        </form>
      </div>
    </div>
  );
}
