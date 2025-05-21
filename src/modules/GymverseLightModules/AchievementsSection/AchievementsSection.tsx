import { Typography, RateBlock } from '@app/shared/components';

import clsx from 'clsx';
import SpikeletIcon from '@app/shared/svg-icons/icons/spikelets/SpikeletLightIcon';
import styles from './AchievementsSection.module.css';

export const AchievementsSection = () => {
  return (
    <div className="flex self-center  h-fit">
      <SpikeletIcon className=" w-auto pb-1" />
      <div className="flex flex-col mt-3 sm:mt-2 md:mt-0">
        <Typography
          bold="medium"
          font="montserrat"
          color="white"
          center
          className={clsx(styles['comment-count'])}>
          150K+
        </Typography>
        <Typography
          bold="medium"
          color="white"
          className={styles['average-rating']}
          font="montserrat"
          center>
          4.8 out of 5 stars
        </Typography>
        <RateBlock
          maxRate={5}
          currentRate={5}
          className="h-full w-auto gap-2.5 mt-2.5 self-center"
          starsStyle="w-4 h-4 md:w-[18px] md:h-[18px]"
        />
      </div>
      <SpikeletIcon className=" w-auto transform scale-x-[-1] pb-1" />
    </div>
  );
};
