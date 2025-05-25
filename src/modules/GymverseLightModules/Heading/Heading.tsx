import { SmartCloseIcon, Typography } from '@app/shared/components';

import CloseBlack from '@app/shared/svg-icons/icons/closes/CloseHeaderDarkIcon';
import CloseWhite from '@app/shared/svg-icons/icons/closes/CloseHeaderLightIcon';

export const Heading = () => {
  return (
    <section className="text-46 *:font-extrabold w-64">
      <SmartCloseIcon
        className="fixed top-9 right-6 z-[100]"
        lightIcon={<CloseWhite />}
        darkIcon={<CloseBlack />}
      />
      <Typography font="montserrat" color="element-primary">
        Smarter Workouts
      </Typography>
      <Typography
        font="montserrat"
        className="bg-gradient-to-r from-[#36B9FF] to-[#9041FF] !text-transparent bg-clip-text">
        Better Results
      </Typography>
    </section>
  );
};
