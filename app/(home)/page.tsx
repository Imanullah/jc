'use client';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { unstable_ViewTransition as ViewTransition } from 'react';

import { CheckButton } from '@/components/buttons/CustomButton';
import FrontText from '@/components/FrontText';
import HexagonImage from '@/components/HexagonImage';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.prefetch(path);

    const tl = gsap.timeline({ defaults: { duration: 1}, onComplete: () => router.push(path) });
    tl.to('.hexa-image', { scale: 0.6, autoAlpha: 0.5 }, 0.5);
    tl.fromTo('.ptext', { y: 0, autoAlpha: 1 }, { y: -10, autoAlpha: 0 }, 0);
  };

  useGSAP(() => {
    gsap.set('.hexa-image', { scale: 0.8, duration: 0 });

    const tl = gsap.timeline();
    gsap.to('.hexa-image', { scale: 1, duration: 2, ease: 'elastic.out(1,0.2)' });
    gsap.fromTo('.ptext', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 3, ease: 'bounce.out', stagger: 0.3 });
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex flex-col space-y-14 py-[20px]">
        <ViewTransition name="hexa-image">
          <HexagonImage />
        </ViewTransition>
        <ViewTransition name="front-text">
          <FrontText className="min-h-[110px]" />
        </ViewTransition>
      </div>
      <div className="flex flex-col gap-5">
        <ViewTransition name="check-button">
          <CheckButton onClick={() => handleRoute('/check')} className="btn-check">
            Get reality check
          </CheckButton>
        </ViewTransition>
      </div>
    </div>
  );
}
