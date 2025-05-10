import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';
import clsx from 'clsx';

type PlanButtonVariants = 'primary' | 'secondary' | 'blank';

interface PlanButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PlanButtonVariants;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: PlanButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}>
      {children}
    </button>
  );
};
