import { PropsWithChildren, SyntheticEvent, useEffect, useRef } from 'react';

import styles from './Dialog.module.css';
import clsx from 'clsx';

export interface DialogProps extends PropsWithChildren {
  open: boolean;
  onClose: VoidFunction;
  className?: string;
}

export const Dialog = ({ children, open, onClose, className }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (event.target !== dialogRef.current) return;
    onClose();
  };

  const handleOnCancel = (event: SyntheticEvent<HTMLDialogElement, Event>) => {
    event.preventDefault();
    onClose();
  };

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement || !dialogElement.showModal) return;

    open ? dialogElement.showModal() : dialogElement.close();
  }, [open, dialogRef]);

  useEffect(() => {
    dialogRef.current?.addEventListener('click', handleClick);

    return () => dialogRef.current?.removeEventListener('click', handleClick);
  }, [dialogRef]);

  return (
    <dialog
      className={clsx(styles.dialog, className)}
      ref={dialogRef}
      onCancel={handleOnCancel}>
      {children}
    </dialog>
  );
};
