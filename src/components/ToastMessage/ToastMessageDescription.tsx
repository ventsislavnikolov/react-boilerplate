import * as Toast from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';

import forbidIcon from 'assets/icons/forbidIcon.svg';

const toastMessage = cva(['flex', 'items-center', 'justify-start'], {
  variants: {
    intent: {
      primary: ['text-center', 'text-black', '[grid-area:_title]'],
      error: ['text-center', 'text-white', '[grid-area:_title]'],
    },
    size: {
      small: ['text-[15px]'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'small', class: 'capitalize' }],
  defaultVariants: {
    intent: 'primary',
    size: 'small',
  },
});

export default function Render({ intent, message, size, className }: any) {
  return (
    <Toast.Description className={toastMessage({ intent, size, className })}>
      <img src={forbidIcon} alt='close icon' className='pr-2' />
      {message}
    </Toast.Description>
  );
}
