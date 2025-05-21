import { ReactNode, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarousel } from './useEmblaCarousel';
import clsx from 'clsx';

type CarouselType = {
  slides: ReactNode[];
  className?: string;
  options?: EmblaOptionsType;
  slidesContainerClassName?: string;
  dotsClassName?: string;
  activeDotClassName?: string;
};

export const Carousel = ({
  slides,
  options,
  className,
  slidesContainerClassName,
  dotsClassName,
  activeDotClassName,
}: CarouselType) => {
  const [isOverflowing, setIsOverflowing] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: isOverflowing,
    ...options,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useCarousel(emblaApi);

  useEffect(() => {
    const checkOverflow = () => {
      if (!emblaApi) return;
      const el = emblaApi.rootNode();

      const style = getComputedStyle(el.parentNode as Element);
      const paddingRight = style.paddingRight;

      setIsOverflowing(
        el.scrollWidth > el.clientWidth + parseFloat(paddingRight)
      );
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [emblaApi]);

  return (
    <div>
      <div className={className}>
        <div ref={emblaRef}>
          <div className={clsx('flex gap-3', slidesContainerClassName)}>
            {slides.map((slide, index) => (
              <div key={index}>{slide}</div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={clsx('flex justify-center items-center h-2 gap-2 mt-6', {
          hidden: !isOverflowing,
        })}>
        {scrollSnaps.map((_, index) => (
          <div
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              'flex w-2 h-2 rounded-full bg-white/30 relative',
              dotsClassName,
              {
                '!bg-white': selectedIndex === index,
                [`${activeDotClassName}`]: selectedIndex === index,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};
