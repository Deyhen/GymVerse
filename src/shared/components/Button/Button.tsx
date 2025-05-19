import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';
import clsx from 'clsx';
import { Link } from 'react-router';

type PlanButtonVariants = 'primary' | 'secondary' | 'blank';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PlanButtonVariants;
  className?: string;
  href?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  href,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        to={href}
        className={clsx(styles.button, styles[variant], className)}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}>
      {children}
    </button>
  );
};
