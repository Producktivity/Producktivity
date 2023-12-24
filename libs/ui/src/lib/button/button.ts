export const sizes = {
  small: 'px-2 py-1 text-sm',
  base: 'px-4 py-2 text-lg',
  large: 'px-6 py-4 text-xl',
};

export const variants = {
  primary: 'bg-primary text-primary-on',
  secondary: 'bg-secondary text-secondary-on',
  tertiary: 'bg-tertiary text-tertiary-on',
  error: 'bg-error text-error-on',
  disabled: 'bg-surface-on/[.12] text-surface-on/[.38] cursor-default',
};

export const shapes = {
  base: 'rounded-lg',
  rounded: 'rounded-full',
};

export type ButtonSize = keyof typeof sizes;
export type ButtonVariant = Exclude<keyof typeof variants, 'disabled'>;
export type ButtonShape = keyof typeof shapes;
