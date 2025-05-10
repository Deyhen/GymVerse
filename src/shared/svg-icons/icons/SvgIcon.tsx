import { ImgHTMLAttributes } from 'react';

export type SvgImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function SvgImage(props: SvgImageProps) {
  return <img alt="" {...props} />;
}

export const svgImageIcon =
  (options: ImgHTMLAttributes<HTMLImageElement>) => (props: SvgImageProps) => {
    return <SvgImage {...options} {...props} />;
  };
