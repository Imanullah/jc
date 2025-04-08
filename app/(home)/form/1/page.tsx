'use client';
import { useEffect, useState } from 'react';
import HexagonImageSmall from '@/components/HexagonImageSmall';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import useDetectKeyboardOpen from 'use-detect-keyboard-open';

import { cn, useIsomorphicLayoutEffect } from '@/lib/utils';
import AppHeader from '@/components/AppHeader';
import Arrowup from '@/assets/icons/arrow_up.png';
import { useFormStore } from '@/stores/formStore';

type TForm = {
  fname: string;
  email: string;
};

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
  } = useForm<TForm>();

  const { setEmail } = useFormStore((state) => state);
  const router = useRouter();
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const onSubmit: SubmitHandler<TForm> = (data) => {
    if (isValid) {
      gsap.to('.hexa', {
        rotateZ: 360,
        duration: 1,
        onComplete: () => submitComplete(),
      });

      const submitComplete = () => {
        setEmail(data.email);
        reset();
        router.push('/form/2');
      };
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

  return (
    <div className="flex flex-col h-dvh md:h-fit p-[20px]">
      <div>
        <AppHeader routeBack="/form" />
      </div>
      <div className={cn('shrink flex flex-col items-center gap-5 py-[20px]', { 'flex-1': !isKeyboardVisible })}>
        <HexagonImageSmall />
        <p className="text-[#FAFAFA] font-bagoss text-[19px] text-center pb-20">How should we contact you? Type in your email address</p>
      </div>
      <div className="pt-[20px] flex flex-col gap-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex items-center">
            <button type="submit" className="absolute right-0 mr-3 bg-white/60 opacity-50 rounded-full p-2 cursor-pointer">
              <Image src={Arrowup} alt="" className="w-[15px]" />
            </button>
            <input type="text" {...register('email', emailValidation)} name="email" placeholder="Email Address" className={cn('h-[60px] w-full border border-white/60 text-white p-2 rounded-[18px] outline-none', { 'border-red-400 text-red-400': errors?.email })} />
          </div>
          {errors?.email && <p className="text-xs text-red-400 p-2">{errors?.email.message}</p>}
        </form>
      </div>
    </div>
  );
}
