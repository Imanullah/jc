'use client';
import React, { createContext, use, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const BaseContext = createContext<any | null>({});

const BaseProvider = ({ children, ...props }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [url, setUrl] = useState<string>(pathname);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isAction, setIsAction] = useState<boolean>(false);
  const [timeline, setTimeline] = useState(() => gsap.timeline({ paused: true }));

  const value = { pathname, url, setUrl, timeline, setTimeline, isActive, setIsActive, isAction, setIsAction, ...props };

  return <BaseContext value={value}>{children}</BaseContext>;
};

const useBaseContext = () => use(BaseContext);

export { BaseProvider, useBaseContext };
