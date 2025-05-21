import { Typography } from '@app/shared/components';
import { features } from './FeaturesDB';
import { RefObject } from 'react';

import clsx from 'clsx';
import CheckDarkIcon from '@app/shared/svg-icons/icons/checks/CheckDarkIcon';

export const FeaturesSection = ({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section className="relative w-full" ref={ref}>
      <div className="relative flex flex-col gap-6 w-full items-center">
        <div className="text-22 sm:text-26 text-center w-full">
          <Typography
            className="whitespace-nowrap"
            color="asure-light"
            bold="bold"
            font="montserrat">
            Get in the gym with the most
          </Typography>
          <Typography bold="bold" font="montserrat" color="element-primary">
            advanced training features
          </Typography>
        </div>
        <table className="w-full text-left text-sm  text-element-primary max-w-[536px]">
          <thead>
            <tr className="">
              <th className="p-4">
                <Typography
                  color="element-primary"
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
                  'bg-[#7795BA] h-[72px] *:p-4 first:*:first:rounded-tl-xl last:*:first:rounded-tr-xl first:*:last:rounded-bl-xl last:*:last:rounded-br-xl',
                  {
                    ['bg-opacity-[0.2]']: index % 2 !== 0,
                    'bg-opacity-[0.3]': index % 2 === 0,
                  }
                )}>
                <td>
                  <Typography
                    color="element-primary"
                    bold="semibold"
                    className="text-15 sm:text-17">
                    {feature.label}
                  </Typography>
                </td>
                <td>{feature.free && <CheckDarkIcon className="mx-auto" />}</td>
                <td>{feature.pro && <CheckDarkIcon className=" mx-auto" />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
