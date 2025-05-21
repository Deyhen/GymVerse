import { HeaderImage } from './components/HeaderImage';

export const ImagesBlock = () => {
  return (
    <div className="flex flex-col gap-1 *:flex *:gap-1 min-w-fit *:min-w-fit  *:*:grow *:*:flex">
      <div>
        <HeaderImage
          className="rounded-r-[10%] "
          href={'/images/start-plan/start-plan-1.png'}
        />
        <HeaderImage
          className="rounded-l-[20.4px]"
          href={'/images/start-plan/start-plan-2.png'}
        />
      </div>
      <div>
        <HeaderImage
          className="rounded-r-[20.4px]"
          href={'/images/start-plan/start-plan-3.png'}
        />
        <HeaderImage
          className="rounded-l-[20.4px]"
          href={'/images/start-plan/start-plan-4.png'}
        />
      </div>
    </div>
  );
};
