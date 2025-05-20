import {
  Button,
  Typography,
  DiffuseCircle,
  Divider,
} from '@app/shared/components';
import { ListItem } from './components/ListItem';
import { FreeTrialButton } from './components/FreeTrialButton';
import { PlanSelectButton } from './components/PlanSelectButton';

export const MorePlans = ({ onClose }: { onClose: VoidFunction }) => {
  return (
    <div className="fixed top-0 left-0 bg-white w-full h-screen flex flex-col overflow-scroll">
      <DiffuseCircle className="fixed top-12 -left-4 w-64 h-64" />
      <DiffuseCircle className="fixed bottom-24 -right-10 w-64 h-64" />
      <div className="flex w-full justify-end items-center py-5 px-5 border-b border-element-primary">
        <Button variant="blank" onClick={onClose}>
          <Typography
            color="element-primary"
            font="apple"
            bold="bold"
            className="text-16">
            Close
          </Typography>
        </Button>
      </div>
      <div className="flex flex-col px-8">
        <Typography
          center
          className="w-full text-22 md:text-26 py-5 md:py-7 leading-9 capitalize"
          font="montserrat"
          bold="bold"
          color="element-primary">
          Unlock Premium to gain muscle & lose weight faster
        </Typography>
        <div className="flex flex-col mt-2 md:mt-4 gap-4 justify-center items-center">
          <ListItem>
            Become consistent and motivated to start and finish your workouts
          </ListItem>
          <ListItem>
            Plans developed by top human trainers to fit your level and goals
          </ListItem>
          <ListItem>
            Your plan adapts & optimizes as you train, ensuring your progress
          </ListItem>
        </div>

        <FreeTrialButton className="mt-11 mb-5 md:mt-14 md:mb-7 items-center last:*:max-w-[738px]" />

        <div className="flex gap-3 items-center mb-6 md:mb-9">
          <Divider />
          <Typography
            center
            color="element-primary"
            bold="semibold"
            className="text-18">
            or
          </Typography>
          <Divider />
        </div>
        <div className="flex flex-col gap-4 items-center pb-16">
          <PlanSelectButton label="Monthly" price="$39.99" />
          <PlanSelectButton label="Lifetime" price="$119.99" />
        </div>
      </div>
    </div>
  );
};
