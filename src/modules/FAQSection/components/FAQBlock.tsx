import { PropsWithChildren, useState } from 'react';
import PlusInCircle from '../../../shared/svg-icons/icons/PlusInCircle';
import { Typography } from '../../../shared/components';
import { CollapseMenu } from '../../../shared/components/CollapseMenu';
import clsx from 'clsx';

interface FAQBlockProps extends PropsWithChildren {
  title: string;
}

export const FAQBlock = ({ title, children }: FAQBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="py-[18px] border-b-2 border-b-primary last:border-0">
      <CollapseMenu
        open={isOpen}
        onClick={handleOnClick}
        anchorElement={
          <div className="flex justify-between items-start gap-4">
            <Typography bold="bold" className="text-20 uppercase">
              {title}
            </Typography>
            <PlusInCircle
              className={clsx('transition-all duration-300', {
                'rotate-45': !isOpen,
              })}
            />
          </div>
        }>
        <div className="flex flex-col gap-6 text-20 mt-4">{children}</div>
      </CollapseMenu>
    </div>
  );
};
