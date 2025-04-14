'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '@/lib/utils';
import { useBaseContext } from '@/providers/BaseProvider';

type divProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function LayoutTransitionHandler({ children, animation, ...props }: { children: React.ReactNode; animation?: boolean } & divProps) {
  // const [displayChildren, setDisplayChildren] = useState(children);
  const router = useRouter();
  const firstLoading = useRef(true);
  const refElement = useRef<HTMLDivElement | null>(null);
  const { url } = useBaseContext();

  useIsomorphicLayoutEffect(() => {
    // Enable/disable animation
    if (!animation) {
      router.push(url);
      return;
    }

    if (!firstLoading.current) {
      const element = refElement.current;

      const onPageExit = () => {
        router.prefetch(url);
        gsap.set(element, { autoAlpha: 1, yPercent: 0 });
        const tl = gsap.timeline({ paused: true, onComplete: () => onPageEnter(element as null, url) });
        tl.to(element, { y: 10, autoAlpha: 0, duration: 1 });
        tl.play();
      };

      const onPageEnter = (element: null, url: string) => {
        router.push(url);
        gsap.set(element, { autoAlpha: 0, y: 10 });

        setTimeout(() => {
          gsap.timeline({ paused: true }).to(element, { y: 0, autoAlpha: 1, duration: 1 }).play();
        }, 500);
      };

      onPageExit();
    }

    firstLoading.current = false;
  }, [children, firstLoading, url]);

  return <div ref={refElement}>{children}</div>;
}
