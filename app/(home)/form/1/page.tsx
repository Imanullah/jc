'use client';
import React, { useEffect, useState } from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { useForm, SubmitHandler } from 'react-hook-form';
import gsap from 'gsap';
import useDetectKeyboardOpen from 'use-detect-keyboard-open';

import { cn } from '@/lib/utils';
import AppHeader from '@/components/AppHeader';
import Arrowup from '@/assets/icons/arrow_up.png';
import { useFormStore } from '@/stores/formStore';
import { useRouter } from 'next/navigation';
import { SmallRoundedButton } from '@/components/buttons/CustomButton';
import { useIsomorphicLayoutEffect } from '@/lib/utils-client';

type FormProps = { email: string };

const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Please enter a valid email',
  },
};

export default function FormPage() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isValid },
  } = useForm<FormProps>();

  const { setEmail } = useFormStore((state) => state);
  const router = useRouter();
  const isKeyboardOpen = useDetectKeyboardOpen();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [dotLottie, setDotLottie] = useState<any>(null);

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    if (isValid) {
      dotLottie?.play();
      setEmail(data.email);
    }
  };

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo('.hexa', { opacity: 0 }, { opacity: 1, duration: 3 });
    setFocus('email');
  }, []);

  useEffect(() => {
    if (isKeyboardOpen) {
      setKeyboardVisible(true);
    } else if (!isKeyboardOpen) {
      setKeyboardVisible(false);
    }
  }, [isKeyboardOpen]);

  useEffect(() => {
    const onComplete = () => {
      reset();
      router.push('/form/2');
    };

    if (dotLottie) {
      dotLottie.addEventListener('complete', onComplete);
    }

    return () => {
      if (dotLottie) {
        dotLottie.removeEventListener('complete', onComplete);
      }
    };
  }, [dotLottie]);

  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex flex-col items-center space-y-14 py-[20px]">
        <ViewTransition name="hexa-image">
          <DotLottieReact src="/JB2G_Lottie.lottie" className="hexa w-20" dotLottieRefCallback={setDotLottie} />
        </ViewTransition>
        <ViewTransition name="front-text">
          <p className="text-[#FAFAFA] font-bagoss text-[19px] text-center pb-20">How should we contact you? Type in your email address</p>
        </ViewTransition>
      </div>
      <div className="flex flex-col gap-5">
        <ViewTransition name="form-bottom">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative flex items-center">
              <SmallRoundedButton icon={Arrowup} className="absolute right-0 mr-3" type="submit" />

              <input type="text" {...register('email', emailValidation)} name="email" placeholder="Email Address" autoComplete="off" autoCorrect="off" className={cn('h-[60px] w-full border border-white/60 text-white p-2 rounded-[18px] outline-none', { 'border-red-400 text-red-400': errors?.email })} />
            </div>
            {errors?.email && <p className="text-xs text-red-400 p-2">{errors?.email.message}</p>}
          </form>
        </ViewTransition>
      </div>
    </div>
  );
}
