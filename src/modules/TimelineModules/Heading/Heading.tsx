import { Typography } from '@app/shared/components';
import CloseWhiteIcon from '@app/shared/svg-icons/icons/closes/CloseWhiteIcon';
import clsx from 'clsx';
import { useNavigate } from 'react-router';

export const Heading = ({ isOpen }: { isOpen: boolean }) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-3 md:pt-4 lg:pt-28 xl:!pt-52 2xl:pt-96">
      <CloseWhiteIcon
        className={clsx('absolute top-14 right-8', {
          hidden: isOpen,
        })}
        onClick={() => navigate('/')}
      />
      <Typography
        color="element-primary"
        font="montserrat"
        bold="bold"
        className="text-32 sm:text-36 lg:text-46 capitalize !font-black"
        component="h1">
        workouts made simple every day
      </Typography>
      <Typography
        color="element-primary"
        bold="semibold"
        className="text-18 sm:text-21 lg:text-28 "
        component="h3">
        Here’s what to expect from your free trial:
      </Typography>
    </section>
  );
};
