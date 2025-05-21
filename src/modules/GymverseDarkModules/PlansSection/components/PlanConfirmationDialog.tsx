import {
  Button,
  Typography,
  Dialog,
  DialogProps,
} from '@app/shared/components';
import { Plans } from '../PlansSection';

interface PlanConfirmationDialogProps extends DialogProps {
  planType: Plans;
}

const PlansConfirmationContentMap: Record<Plans, string> = {
  FreeTrial: 'BEST VALUE, Start 7-day free trial',
  Lifetime: 'Monthly $19.99',
  Monthly: 'Lifetime $119.99',
};

export const PlanConfirmationDialog = ({
  open,
  onClose,
  planType,
}: PlanConfirmationDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="flex flex-col gap-10 px-10 sm:!px-20 relative">
      <Button
        onClick={onClose}
        variant="blank"
        className="!absolute top-4 right-5 text-20 font-semibold font-montserrat text-white">
        X
      </Button>
      <div className="flex flex-col gap-6 h-fit">
        <Typography bold="bold" className="text-24 w-full" center>
          Plan Confirmation
        </Typography>
        <Typography className="text-18 w-full" center>
          {PlansConfirmationContentMap[planType]}
        </Typography>
      </div>
      <Button
        variant="secondary"
        className="!bg-element-primary h-fit"
        onClick={onClose}>
        <Typography className="text-20" bold="bold">
          Confirm
        </Typography>
      </Button>
    </Dialog>
  );
};
