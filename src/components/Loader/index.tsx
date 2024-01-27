import { cva } from 'class-variance-authority';

const container = cva('div', {
  variants: {
    intent: {
      primary: ['flex', 'flex-col', 'items-center', 'justify-center'],
    },
    size: {
      small: ['h-screen', 'w-full'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'small', class: 'capitalize' }],
  defaultVariants: {
    intent: 'primary',
    size: 'small',
  },
});

const background = cva('div', {
  variants: {
    intent: {
      primary: ['absolute', 'rounded-full', 'border-[2px]', 'border-solid', 'border-gray-200'],
    },
    size: {
      small: ['h-[30px]', 'w-[30px]'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'small', class: 'capitalize' }],
  defaultVariants: {
    intent: 'primary',
    size: 'small',
  },
});

const spinner = cva('div', {
  variants: {
    intent: {
      primary: [
        'absolute',
        'animate-spin',
        'rounded-full',
        'border-[2px]',
        'border-solid',
        'border-primary',
        'border-t-transparent',
      ],
    },
    size: {
      small: ['h-[30px]', 'w-[30px]'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'small', class: 'capitalize' }],
  defaultVariants: {
    intent: 'primary',
    size: 'small',
  },
});

export default function Render({ intent, size, className }: any) {
  return (
    <div className={container({ intent, size, className })} data-testid='loader'>
      <div className={background({ intent, size, className })} />
      <div className={spinner({ intent, size, className })} />
    </div>
  );
}
