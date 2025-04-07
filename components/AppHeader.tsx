'use client';
import { RoundedButton } from '@/components/CustomButton';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';

import { useBaseContext } from '@/providers/BaseProvider';
import Refresh from '@/assets/icons/refresh.png';
import ArrowLeft from '@/assets/icons/arrow_left.png';
import { cn } from '@/lib/utils';
import JCLogo from '@/components/JCLogo';

export default function AppHeader({ routeBack }: { routeBack?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isActive } = useBaseContext();

  const onRefresh = () => {
    gsap.to('.button-refresh', { rotateZ: '+=180', duration: 1 });
    // router.refresh();
    window.location.reload();
  };

  const onRouteBack = (url?: string) => {
    if (url) {
      router.push(url);
    } else {
      router.back();
    }
  };

  return (
    <div className="flex justify-between items-center pb-[20px] md:max-w-md gap-2">
      <div className="flex justify-first min-w-14">
        <RoundedButton icon={ArrowLeft} onClick={() => router.push('/')} className={cn('', { hidden: isActive || pathname == '/' || pathname.includes('/form') })} />
        <RoundedButton icon={ArrowLeft} className={cn('prev-el', { hidden: !isActive || pathname == '/' || pathname.includes('/form') })} />
        {pathname.includes('/form') && <RoundedButton icon={ArrowLeft} onClick={() => onRouteBack(routeBack)} />}
      </div>
      <div className="flex justify-center text-white w-full">
        <JCLogo />
      </div>
      <div className="flex justify-end min-w-14 ">
        <RoundedButton icon={Refresh} onClick={onRefresh} className="button-refresh" />
      </div>
    </div>
  );
}
