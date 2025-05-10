import { Typography } from '../../shared/components';
import { benefits } from './BenefitsDB';
import { BenefitBlock } from './components';

export const BenefitsSection = () => {
  return (
    <div className="flex flex-col mt-24 w-full justify-center gap-8">
      <Typography
        center
        bold="bold"
        font="montserrat"
        className="text-23 sm:text-26 xl:text-28 w-[270px] sm:w-[310px] self-center leading-[33px]">
        Get your gym gains with the{' '}
        <Typography
          component="span"
          color="primary"
          bold="bold"
          font="montserrat">
          #1 Gym App!
        </Typography>
      </Typography>
      <div className="flex flex-col gap-3 md:items-center">
        {benefits.map((benefit) => (
          <BenefitBlock
            key={benefit.title}
            title={benefit.title}
            icon={benefit.icon}>
            {benefit.subtitle}
          </BenefitBlock>
        ))}
      </div>
    </div>
  );
};
