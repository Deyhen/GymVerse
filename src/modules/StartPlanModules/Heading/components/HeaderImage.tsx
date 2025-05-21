import clsx from 'clsx';

interface HeaderImageProps {
  href: string;
  className?: string;
  alt?: string;
}

export const HeaderImage = ({ href, className }: HeaderImageProps) => {
  return (
    <div className="relative">
      <img
        className={clsx(' w-full flex shrink', className)}
        src={href}
        alt={'Header Image'}
      />
    </div>
  );
};
