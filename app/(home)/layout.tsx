import { BaseProvider } from '@/providers/BaseProvider';
import { unstable_ViewTransition as ViewTransition } from 'react';
import AppHeader from '@/components/AppHeader';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseProvider>
      <ViewTransition>
        <div className="container main-bg flex flex-col h-dvh md:h-fit md:max-w-md p-[20px]">
          <AppHeader />
          <main className="flex-1">{children}</main>
        </div>
      </ViewTransition>
    </BaseProvider>
  );
}
