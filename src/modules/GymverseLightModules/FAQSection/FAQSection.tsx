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
            Everybody is different, but if you are consistent, you will begin to
            get stronger every week and see results within 4 weeks. On average,
            each plan is 5-6 weeks long and you will start to see a change in
            your body as you progress. Your expectations, however, should be
            realistic. Significant change requires commitment, patience, and
            time.
          </Typography>
        </FAQBlock>
        <FAQBlock title="HOW MANY DAYS A WEEK SHOULD I WORK OUT?">
          <Typography color="element-primary">
            Our plans range from 1-7 days per week. How many days you work out
            is entirely your call. You decide according to your schedule, goals,
            and training experience.
          </Typography>
        </FAQBlock>
        <FAQBlock
          title="I HAVE A HOME GYM. IS THE APP COMPATIBLE TO WORKING OUT AT HOME?
">
          <Typography color="element-primary">
            Definitely. You will get a custom plan based on the equipment you
            have available, whether you’re at home, at a hotel, in a small gym,
            etc. You just need to select your equipment in the app settings and
            you’ll get a plan specific to your available gym gear. We also offer
            bodyweight plans if you have no equipment at all.
          </Typography>
        </FAQBlock>
        <FAQBlock title="CAN I MODIFY THE PLANS, FOR EXAMPLE, CHANGE OR SWAP OUT EXERCISES?">
          <Typography color="element-primary">
            Yes. You have the option to swap out exercises that target the same
            muscle group. You can also delete, create, and add exercises to your
            existing plan or create your own plan altogether.
          </Typography>
        </FAQBlock>
      </div>
    </section>
  );
};
