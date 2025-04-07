import React from 'react';
import { BaseProvider } from '@/providers/BaseProvider';
// import TransitionHandler from '@/components/TransitionHandler';
import AppHeader from '@/components/AppHeader';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container main-bg md:max-w-md">
      <BaseProvider>
        <header>
          <AppHeader />
        </header>
        <main>{children}</main>
      </BaseProvider>
    </div>
  );
}
