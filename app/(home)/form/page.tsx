'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import HexagonImageSmall from '@/components/HexagonImageSmall';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import gsap from 'gsap';
import useDetectKeyboardOpen from 'use-detect-keyboard-open';

import { cn } from '@/lib/utils';
import AppHeader from '@/components/AppHeader';
import Arrowup from '@/assets/icons/arrow_up.png';
import { useFormStore } from '@/stores/formStore';
import { useRouter } from 'next/navigation';

const useIsomorphicLayoutEffect = typeof window != 'undefined' ? useLayoutEffect : useEffect;

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
  const inputRef = useRef(null);
  // const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [height, setHeight] = useState(0);

  const handleResize = () => setHeight(window.innerHeight);

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
  });

  useEffect(() => {
    // handleResize();
    if (isKeyboardOpen) {
      setKeyboardVisible(true);
      setHeight(window.innerHeight);
    } else if (!isKeyboardOpen) {
      setKeyboardVisible(false);
      setHeight(window.innerHeight);
    }
  }, [isKeyboardOpen]);

  return (
    <div className="flex flex-col h-dvh md:h-fit p-[20px]">
      <div>
        <AppHeader routeBack="/check" />
      </div>
      <div className={cn('shrink flex flex-col items-center gap-5 py-[20px] bg-amber-600', { 'flex-1 h-full': !isKeyboardVisible })}>
        <HexagonImageSmall />
        <p className="text-[#FAFAFA] font-bagoss text-[19px] text-center">Let's start with the basics. Type in your first name.</p>
        <p className="text-[#FAFAFA]">{height}</p>
        {/* <p className="text-[#FAFAFA]">{`${isKeyboardOpen}`}</p> */}
      </div>
      <div className="pt-[20px] flex flex-col gap-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div ref={inputRef} className="relative flex items-center">
            <button type="submit" className="absolute right-0 mr-3 bg-white/60 opacity-50 rounded-full p-2 cursor-pointer">
              <Image src={Arrowup} alt="" className="w-[15px]" />
            </button>
            <input type="text" {...register('fname', nameValidation)} name="fname" placeholder="First Name" className={cn('h-[60px] w-full border border-white/60 text-white p-2 rounded-[18px] outline-none', { 'border-red-400 text-red-400': errors?.fname })} />
          </div>
          {errors?.fname && <p className="text-xs text-red-400 p-2">{errors?.fname.message}</p>}
        </form>
      </div>
    </div>
  );
}
