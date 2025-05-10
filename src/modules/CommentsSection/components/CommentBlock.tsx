import { PropsWithChildren } from 'react';
import { Typography } from '../../../shared/components';
import { RateBlock } from '../../../shared/components/RateBlock';

interface CommentProps extends PropsWithChildren {
  title: string;
  rate: number;
  author: string;
}

export const CommentBlock = ({
  title,
  author,
  rate,
  children,
}: CommentProps) => {
  return (
    <div className="px-6 py-4 sm:px-[26px] sm:py-[18px] flex flex-col gap-[5px] sm:gap-1.5 lg:gap-2 bg-element-secondary rounded-xl w-72 sm:w-80 min-h-[140px]">
      <div className="flex justify-between">
        <Typography
          className="text-14 sm:text-15 md:text-16 lg:text-18"
          bold="bold">
          {title}
        </Typography>
        <Typography
          className="text-12 sm:text-13 md:text-14 lg:text-15"
          color="secondary">
          -{author}
        </Typography>
      </div>
      <RateBlock maxRate={5} currentRate={rate} />
      <Typography>{children}</Typography>
    </div>
  );
};
