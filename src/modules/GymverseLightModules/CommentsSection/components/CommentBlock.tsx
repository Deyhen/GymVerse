import { PropsWithChildren } from 'react';
import { Typography, RateBlock } from '@app/shared/components';

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
    <div className="px-6 max-sm:pr-5 py-4 min-h-[140px] sm:min-h-[173px] sm:px-[26px] sm:py-[18px] flex flex-col gap-[5px] sm:gap-1.5 lg:gap-2 bg-white rounded-xl border border-[#566B8580] w-[315px] ">
      <div className="flex justify-between">
        <Typography
          className="text-14 sm:text-15 md:text-16 lg:text-18"
          color="element-primary"
          bold="bold">
          {title}
        </Typography>
        <Typography
          className="text-12 md:text-14 lg:text-15 whitespace-nowrap"
          color="element-primary">
          -{author}
        </Typography>
      </div>
      <RateBlock maxRate={5} currentRate={rate} />
      <Typography
        color="element-primary"
        className="text-14 sm:text-16  min-h-[60px]">
        {children}
      </Typography>
    </div>
  );
};
