import { Typography } from '@app/shared/components';
import { FAQBlock } from './components';

export const FAQSection = () => {
  return (
    <section className="mt-16 w-full items-center flex flex-col gap-14">
      <Typography
        bold="bold"
        color="element-primary"
        font="montserrat"
        className="text-23 sm:text-26">
        FAQ`s
      </Typography>
      <div>
        <FAQBlock title="I'm a beginner at the gym, and my partner is advanced. Would this app benefit both of us?">
          <Typography color="element-primary">
            Absolutely! The app is designed to support users of all fitness
            levels, whether you're just starting out or an experienced trainee.
          </Typography>
          <Typography color="element-primary">
            For beginners, it creates a personalized plan tailored to your
            needs, guiding you step-by-step with no guesswork involved, whether
            your goal is to look better, lose weight, or get in shape.
          </Typography>
          <Typography color="element-primary">
            For intermediate or advanced trainees, the app offers challenging
            plans with a high training frequency and technically demanding
            exercises. With automatic progressive overload management, users can
            break through plateaus and achieve new PRs, ensuring continuous
            growth.
          </Typography>
        </FAQBlock>
        <FAQBlock title="HOW LONG WILL IT TAKE TO START SEEING RESULTS?">
          <Typography color="element-primary">
            Absolutely! The app is designed to support users of all fitness
            levels, whether you're just starting out or an experienced trainee.
          </Typography>
          <Typography color="element-primary">
            For beginners, it creates a personalized plan tailored to your
            needs, guiding you step-by-step with no guesswork involved, whether
            your goal is to look better, lose weight, or get in shape.
          </Typography>
          <Typography color="element-primary">
            For intermediate or advanced trainees, the app offers challenging
            plans with a high training frequency and technically demanding
            exercises. With automatic progressive overload management, users can
            break through plateaus and achieve new PRs, ensuring continuous
            growth.
          </Typography>
        </FAQBlock>
        <FAQBlock title="HOW MANY DAYS A WEEK SHOULD I WORK OUT?">
          <Typography color="element-primary">
            Absolutely! The app is designed to support users of all fitness
            levels, whether you're just starting out or an experienced trainee.
          </Typography>
          <Typography color="element-primary">
            For beginners, it creates a personalized plan tailored to your
            needs, guiding you step-by-step with no guesswork involved, whether
            your goal is to look better, lose weight, or get in shape.
          </Typography>
          <Typography color="element-primary">
            For intermediate or advanced trainees, the app offers challenging
            plans with a high training frequency and technically demanding
            exercises. With automatic progressive overload management, users can
            break through plateaus and achieve new PRs, ensuring continuous
            growth.
          </Typography>
        </FAQBlock>
        <FAQBlock
          title="I HAVE A HOME GYM. IS THE APP COMPATIBLE TO WORKING OUT AT HOME?
">
          <Typography color="element-primary">
            Absolutely! The app is designed to support users of all fitness
            levels, whether you're just starting out or an experienced trainee.
          </Typography>
          <Typography color="element-primary">
            For beginners, it creates a personalized plan tailored to your
            needs, guiding you step-by-step with no guesswork involved, whether
            your goal is to look better, lose weight, or get in shape.
          </Typography>
          <Typography color="element-primary">
            For intermediate or advanced trainees, the app offers challenging
            plans with a high training frequency and technically demanding
            exercises. With automatic progressive overload management, users can
            break through plateaus and achieve new PRs, ensuring continuous
            growth.
          </Typography>
        </FAQBlock>
        <FAQBlock title="CAN I MODIFY THE PLANS, FOR EXAMPLE, CHANGE OR SWAP OUT EXERCISES?">
          <Typography color="element-primary">
            Absolutely! The app is designed to support users of all fitness
            levels, whether you're just starting out or an experienced trainee.
          </Typography>
          <Typography color="element-primary">
            For beginners, it creates a personalized plan tailored to your
            needs, guiding you step-by-step with no guesswork involved, whether
            your goal is to look better, lose weight, or get in shape.
          </Typography>
          <Typography color="element-primary">
            For intermediate or advanced trainees, the app offers challenging
            plans with a high training frequency and technically demanding
            exercises. With automatic progressive overload management, users can
            break through plateaus and achieve new PRs, ensuring continuous
            growth.
          </Typography>
        </FAQBlock>
      </div>
    </section>
  );
};
