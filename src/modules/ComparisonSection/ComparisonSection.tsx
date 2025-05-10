import {
  SkewBackgroundSquare,
  Carousel,
  Typography,
} from '../../shared/components';
import { comparisons } from './comparisonsDB';
import { ComparisonSlide } from './components';

export const ComparisonSection = () => {
  return (
    <div className="mt-32 flex flex-col gap-6 w-full relative">
      <SkewBackgroundSquare />
      <Typography
        bold="bold"
        font="montserrat"
        className="text-23 sm:text-26 self-center relative">
        Real people.{' '}
        <Typography
          component="span"
          color="primary"
          bold="bold"
          font="montserrat">
          Real results
        </Typography>
      </Typography>
      <Carousel
        slidesContainerClassName="*:min-w-full md:*:min-w-[50%] xl:*:min-w-[33%] 3xl:*:min-w-[25%]"
        slides={comparisons.map((comparison) => (
          <ComparisonSlide
            afterImage={comparison.afterImage}
            beforeImage={comparison.beforeImage}>
            {comparison.content}
          </ComparisonSlide>
        ))}
      />
    </div>
  );
};
