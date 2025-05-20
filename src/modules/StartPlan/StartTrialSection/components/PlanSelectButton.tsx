import { Button, Typography } from '@app/shared/components';

export const PlanSelectButton = ({
  label,
  price,
}: {
  label: string;
  price: string;
}) => (
  <Button
    variant="secondary"
    className="w-full max-w-[738px] flex justify-between items-center max-lg:!py-3 !border-2 !border-element-primary">
    <Typography color="element-primary" bold="semibold" className="text-21">
      {label}
    </Typography>
    <Typography color="element-primary" bold="semibold" className="text-21">
      {price}
    </Typography>
  </Button>
);
