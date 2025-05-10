import { PropsWithChildren, HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TypographyColor =
  | 'inherit'
  | 'primary'
  | 'tertiary'
  | 'secondary'
  | 'grey-primary'
  | 'grey-secondary'
  | 'element-primary'
  | 'element-secondary'
  | 'white';

const colors: Record<TypographyColor, string> = {
  inherit: 'text-inherit',
  primary: 'text-primary',
  tertiary: 'text-tertiary',
  secondary: 'text-secondary',
  'grey-primary': 'text-grey-primary',
  'grey-secondary': 'text-grey-secondary',
  'element-primary': 'text-element-primary',
  'element-secondary': 'text-element-secondary',
  white: 'text-white',
};

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body';

type ComponentType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'span'
  | 'p'
  | 'label'
  | 'li';

type Boldness = 'normal' | 'medium' | 'semibold' | 'bold';
type FontFamily = 'assistant' | 'montserrat';

export interface TypographyProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  component?: ComponentType;
  bold?: Boldness;
  font?: FontFamily;
  underline?: boolean;
  uppercase?: boolean;
  htmlFor?: string;
  color?: TypographyColor;
  center?: boolean;
}

const components: Record<TypographyVariant, ComponentType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body: 'p',
};

const boldnessVariants: Record<Boldness, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const fontFamilyVariants: Record<FontFamily, string> = {
  assistant: 'font-assistant',
  montserrat: 'font-montserrat',
};

export function Typography({
  className,
  children,
  bold = 'normal',
  variant = 'body',
  color = 'white',
  font = 'assistant',
  underline,
  uppercase,
  center,
  component: Component,
  ...props
}: TypographyProps) {
  const Tag = Component || components[variant];

  return (
    <Tag
      className={clsx(
        {
          underline,
          uppercase,
          'text-center': center,
        },
        'break-words',
        boldnessVariants[bold],
        colors[color],
        fontFamilyVariants[font],
        className
      )}
      {...props}>
      {children}
    </Tag>
  );
}
