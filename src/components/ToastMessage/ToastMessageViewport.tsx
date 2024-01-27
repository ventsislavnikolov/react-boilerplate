import * as Toast from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';

const toastMessageViewport = cva([], {
  variants: {
    intent: {
      primary: [
        'fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]',
      ],
    },
    size: {
      small: ['w-[402px]', 'max-w-[100vw]'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'small', class: 'capitalize' }],
  defaultVariants: {
    intent: 'primary',
    size: 'small',
  },
});

export default function Render({ intent, size, className }: any) {
  return <Toast.Viewport className={toastMessageViewport({ intent, size, className })} />;
}
