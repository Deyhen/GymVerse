import { useEffect } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  callback: () => void
) {
  useEffect(() => {
    function handleEvent(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!ref.current) return;
      if (!el || el.contains(event.target as Node)) return;
      callback();
    }

    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('touchstart', handleEvent);

    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, [ref, callback]);
}
