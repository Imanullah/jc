import React from 'react';
import { BaseProvider } from '@/providers/BaseProvider';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseProvider>
      <div className="container main-bg md:max-w-md">{children}</div>
    </BaseProvider>
  );
}
