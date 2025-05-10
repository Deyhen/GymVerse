import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ContextMenuProps extends PropsWithChildren {
  open?: boolean;
  anchorElement: ReactNode;
  onClick?: VoidFunction;
  className?: string;
}

export const CollapseMenu = ({
  children,
  open,
  onClick,
  className,
  anchorElement,
}: ContextMenuProps) => {
  const [isOpen, setIsOpen] = useState(open ?? false);
  const [menuHeight, setMenuHeight] = useState(0);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOnClick = () => {
    if (!!onClick) {
      return onClick();
    }

    return (() => setIsOpen((prev) => !prev))();
  };
  useEffect(() => {
    if (isOpen || !menuRef.current) return;

    setMenuHeight(menuRef.current.scrollHeight);
  }, [menuRef, isOpen]);

  return (
    <div className={className}>
      <div onClick={handleOnClick}>{anchorElement}</div>
      <div
        ref={menuRef}
        style={{ height: open ?? isOpen ? `${menuHeight}px` : '0px' }}
        className="transition-all duration-300 overflow-hidden">
        {children}
      </div>
    </div>
  );
};
