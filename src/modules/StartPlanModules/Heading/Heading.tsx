import { DiffuseCircle, Typography } from '@app/shared/components';
import { ImagesBlock } from './ImagesBlock';
import { useNavigate } from 'react-router';
import CloseWhiteIcon from '@app/shared/svg-icons/icons/closes/CloseWhiteIcon';

export const Heading = () => {
  const navigate = useNavigate();
  return (
    <section>
      <CloseWhiteIcon
        className="absolute top-20 right-10 z-10"
        onClick={() => navigate('/')}
      />
      <DiffuseCircle className="absolute blur-[80px] bottom-24 -right-16 w-64 h-64" />
      <DiffuseCircle className="absolute blur-[80px] -bottom-12 -left-16 w-64 h-64" />
      <ImagesBlock />
      <Typography
        center
        className="text-35 capitalize mt-7 w-full"
        color="element-primary"
        bold="semibold"
        font="montserrat">
        Start Your Plan
      </Typography>
    </section>
  );
};
