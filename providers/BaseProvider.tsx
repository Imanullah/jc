'use client';
import React, { createContext, use, useState } from 'react';
import { usePathname } from 'next/navigation';

interface ContextProps {
  url: string;
  isActive: boolean;
  isAction: boolean;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAction: React.Dispatch<React.SetStateAction<boolean>>;
}
const contextDefault = {
  url: '',
  isActive: false,
  isAction: false,
  setUrl: () => {},
  setIsActive: () => {},
  setIsAction: () => {},
};

const BaseContext = createContext<ContextProps>(contextDefault);

const BaseProvider = ({ children, ...props }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [url, setUrl] = useState<string>(pathname);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isAction, setIsAction] = useState<boolean>(false);

  const value = { pathname, url, setUrl, isActive, setIsActive, isAction, setIsAction, ...props };

  return <BaseContext value={value}>{children}</BaseContext>;
};

const useBaseContext = () => use(BaseContext);

export { BaseProvider, useBaseContext };
