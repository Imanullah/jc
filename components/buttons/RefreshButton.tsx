'use client';
import gsap from 'gsap';
import { RoundedButton } from '@/components/buttons/CustomButton';
import refresh from '@/icons/refresh.png';

export default function RefreshButton() {
  const onRefresh = () => {
    gsap.to('.button-refresh', { rotateZ: '+=180', duration: 1, onComplete: () => window.location.reload()});
    // router.refresh();
    //
  };

  return <RoundedButton icon={refresh} onClick={onRefresh} className="button-refresh" />;
}
