import { PropsWithChildren } from 'react';
import { Typography } from '@app/shared/components';
import GymVerseLogoIcon from '@app/shared/svg-icons/icons/GymVerseLogoIcon';

interface ComparisonSlideProps extends PropsWithChildren {
  beforeImage: string;
  afterImage: string;
}

export const ComparisonSlide = ({
  children,
  beforeImage,
  afterImage,
}: ComparisonSlideProps) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-start w-full ">
      <div className="flex relative bg-element-primary rounded-lg px-2 py-3 w-full justify-center items-start gap-1">
        <div className="flex flex-col items-center gap-2 w-full">
          <img
            src={beforeImage}
            className="w-full h-auto rounded-s-lg object-contain"
          />
          <Typography
            color="primary"
            font="montserrat"
            bold="bold"
            className="text-17">
            Before
          </Typography>
        </div>
        <div className="rounded-md bg-element-primary py-2 px-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%]">
          <GymVerseLogoIcon />
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <img
            src={afterImage}
            className="w-full h-auto rounded-e-lg object-contain"
          />
          <Typography
            color="primary"
            font="montserrat"
            bold="bold"
            className="text-17">
            After
          </Typography>
        </div>
      </div>
      <div>
        <Typography
          center
          color="secondary"
          className="text-14 sm:text-16 px-4 md:px-8">
          {children}
        </Typography>
      </div>
    </div>
  );
};
