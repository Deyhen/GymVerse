import { Typography } from '@app/shared/components';
import CheckBlueIcon from '@app/shared/svg-icons/icons/checks/CheckBlueIcon';
import { PropsWithChildren } from 'react';

export const ListItem = ({ children }: PropsWithChildren) => (
  <div className="flex items-start gap-2.5">
    <CheckBlueIcon className="pt-1" />
    <Typography
      className="text-16 lg:text-18 max-md:w-64"
      color="element-primary">
      {children}
    </Typography>
  </div>
);
