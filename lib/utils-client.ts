
import { useEffect, useLayoutEffect, useRef } from 'react';

export const useIsomorphicLayoutEffect = typeof window != 'undefined' ? useLayoutEffect : useEffect;

export function useIsFirstRender(): boolean {
  const isFirst = useRef<boolean>(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}