import React from 'react';
import { BaseProvider } from '@/providers/BaseProvider';
// import TransitionHandler from '@/components/TransitionHandler';
import AppHeader from '@/components/AppHeader';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseProvider>
      <div className="container main-bg md:h-fit md:max-w-md">
        <header>
          {/* <AppHeader /> */}
        </header>
        <main>{children}</main>
      </div>
    </BaseProvider>
  );
}
