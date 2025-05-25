import React, { useEffect, useRef, useState } from 'react';
import Color from 'color';

export type SmartCloseIconProps = {
  darkIcon: React.ReactNode;
  lightIcon: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const SmartCloseIcon: React.FC<SmartCloseIconProps> = ({
  darkIcon,
  lightIcon,
  className = '',
  onClick,
}) => {
  const [showLightIcon, setShowLightIcon] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const detectBgAtIconCenter = () => {
    if (!ref.current) return null;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const [cx, cy] = [left + width / 2, top + height / 2];

    return (
      document
        .elementsFromPoint(cx, cy)
        .filter((el) => el !== ref.current)
        .map((el) => getComputedStyle(el as HTMLElement).backgroundColor)
        .find((bg) => bg && bg !== 'transparent' && !bg.endsWith(', 0)')) ??
      null
    );
  };

  const update = () => {
    const bg = detectBgAtIconCenter();
    if (!bg) return setShowLightIcon(false);

    try {
      setShowLightIcon(Color(bg).isDark());
    } catch {
      setShowLightIcon(false);
    }
  };

  useEffect(() => {
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`cursor-pointer transition-colors ${className}`}>
      {showLightIcon ? lightIcon : darkIcon}
    </div>
  );
};
