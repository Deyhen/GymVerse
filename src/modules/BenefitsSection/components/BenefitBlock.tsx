import { PropsWithChildren, ReactNode } from 'react';
import { Typography } from '../../../shared/components';

interface BenefitBlockProps extends PropsWithChildren {
  icon: ReactNode;
  title: string;
}

export const BenefitBlock = ({ icon, title, children }: BenefitBlockProps) => {
  return (
    <div className="flex gap-2 sm:gap-4 items-center p-3 pr-4 md:p-4 md:pr-6 rounded-xl bg-element-secondary md:first:*:w-16 md:w-[536px]">
      {icon}
      <div className="flex flex-col gap-2">
        <Typography bold="bold" className="text-16 md:text-18">
          {title}
        </Typography>
        <Typography color="tertiary" className="text-14 md:text-15">
          {children}
        </Typography>
      </div>
    </div>
  );
};
