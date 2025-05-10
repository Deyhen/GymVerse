import { SkewBackgroundSquare, Typography } from '../../shared/components';
import { features } from './FeaturesDB';
import { RefObject } from 'react';

import clsx from 'clsx';
import CheckIcon from '../../shared/svg-icons/icons/CheckIcon';

export const FeaturesSection = ({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section className="mt-16 relative w-full" ref={ref}>
      <SkewBackgroundSquare className="h-[140%] -top-16" />
      <div className="relative flex flex-col gap-8 w-full items-center">
        <div className="text-23 sm:text-26 text-center w-full">
          <Typography bold="bold" font="montserrat">
            Get in the gym with the most
          </Typography>
          <Typography bold="bold" font="montserrat" color="primary">
            advanced training features
          </Typography>
        </div>
        <table className="w-full text-left text-sm  text-white max-w-[536px]">
          <thead>
            <tr className="">
              <th className="p-4">
                <Typography
                  bold="semibold"
                  className="text-18 sm:text-20 uppercase">
                  What’s Included
                </Typography>
              </th>
              <th className="p-4 ">
                <Typography
                  color="grey-secondary"
                  bold="medium"
                  className="text-16 sm:text-18"
                  center>
                  Free
                </Typography>
              </th>
              <th className="p-4 ">
                <Typography
                  color="grey-secondary"
                  bold="medium"
                  className="text-16 sm:text-18"
                  center>
                  Pro
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={feature.label}
                className={clsx(
                  'bg-element-primary h-[72px] *:p-4 first:*:first:rounded-tl-xl last:*:first:rounded-tr-xl first:*:last:rounded-bl-xl last:*:last:rounded-br-xl',
                  {
                    ['bg-opacity-50']: index % 2 === 0,
                  }
                )}>
                <td>
                  <Typography bold="semibold" className="text-15 sm:text-17">
                    {feature.label}
                  </Typography>
                </td>
                <td>{feature.free && <CheckIcon className="mx-auto" />}</td>
                <td>{feature.pro && <CheckIcon className=" mx-auto" />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
