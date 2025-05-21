import { Typography } from '@app/shared/components';
import { useMediaQuery } from '@app/shared/hooks';

export const Heading = () => {
  const isMediumScreen = useMediaQuery('md');
  return (
    <div className="text-34 md:text-37 lg:text-40 xl:text-46 2xl:text-49 ">
      <Typography component="h1" bold="bold" font="montserrat">
        Know exactly what
      </Typography>
      <Typography component="h1" className="w-fit" font="montserrat">
        <Typography
          component="span"
          bold="bold"
          color="white"
          font="montserrat">
          to do
        </Typography>{' '}
        <Typography
          component="span"
          bold="bold"
          color="primary"
          font="montserrat">
          every day
        </Typography>{' '}
        <br className={isMediumScreen ? 'hidden' : ''} />
        <Typography component={'span'} bold="bold" font="montserrat">
          at the gym
        </Typography>
      </Typography>
    </div>
  );
};
