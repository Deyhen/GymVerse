import clsx from 'clsx';
import BlackStarIcon from '../../svg-icons/icons/EmptyStarIcon';
import YellowStarIcon from '../../svg-icons/icons/YellowStarIcon';

interface RateBlockProps {
  maxRate: number;
  currentRate: number;
  className?: string;
  starsStyle?: string;
}

export const RateBlock = ({
  maxRate,
  currentRate,
  className,
  starsStyle,
}: RateBlockProps) => {
  return (
    <div className={clsx('flex gap-1', className)}>
      {Array.from({ length: maxRate }).map((_, i) =>
        i < currentRate ? (
          <YellowStarIcon key={i} className={starsStyle} />
        ) : (
          <BlackStarIcon key={i} className={starsStyle} />
        )
      )}
    </div>
  );
};
