'use client';
import React, { useEffect } from 'react';
import HexagonImageSmall from '@/components/HexagonImageSmall';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { cn } from '@/lib/utils';
import Arrowup from '@/assets/icons/arrow_up.png';
import { useFormStore } from '@/stores/formStore';
import { useRouter } from 'next/navigation';

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

  useEffect(() => {
    setFocus('fname');
    gsap.fromTo('.hexa', { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

  return (
    <div className="flex flex-col h-[calc(100dvh-70px)] md:h-fit justify-between p-[20px]">
      <div className="flex flex-col items-center gap-5">
        <HexagonImageSmall />
        <p className="text-[#FAFAFA] font-bagoss text-[19px] text-center">Let's start with the basics. Type in your first name.</p>
      </div>
      <div className="py-[20px] flex flex-col gap-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex items-center">
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
