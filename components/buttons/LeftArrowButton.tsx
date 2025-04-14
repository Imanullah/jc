'use client';
import ArrowLeft from '@/assets/icons/arrow_left.png';
import { RoundedButton } from '@/components/buttons/CustomButton';
import { cn } from '@/lib/utils';
import { useBaseContext } from '@/providers/BaseProvider';
import { usePathname, useRouter } from 'next/navigation';

export default function LeftArrowButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { isActive } = useBaseContext();

  return (
    <div>
      <RoundedButton icon={ArrowLeft} onClick={() => router.push('/')} className={cn('', { hidden: isActive || pathname == '/' || pathname.includes('/form') })} />
      <RoundedButton icon={ArrowLeft} className={cn('prev-el', { hidden: !isActive || pathname == '/' || pathname.includes('/form') })} />
      {pathname.includes('/form') && <RoundedButton icon={ArrowLeft} onClick={() => router.back()} />}
    </div>
  );
}
