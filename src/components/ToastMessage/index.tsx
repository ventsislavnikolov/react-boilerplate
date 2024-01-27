import React from 'react';
import { cva } from 'class-variance-authority';

import * as Toast from '@radix-ui/react-toast';

import closeIcon from 'assets/icons/closeIcon.svg';

import ToastMessageViewport from 'components/ToastMessage/ToastMessageViewport';
import ToastMessageDescription from 'components/ToastMessage/ToastMessageDescription';

const toast = cva(
  [
    'data-[state=closed]:animate-hide',
    'data-[swipe=end]:animate-swipeOut',
    'grid',
    'grid-cols-[auto_max-content]',
    'items-center',
    'rounded-md',
    'shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]',
    '[grid-template-areas:_"title_action"_"description_action"]',
    'data-[swipe=cancel]:translate-x-0',
    'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
    'data-[swipe=cancel]:transition-[transform_200ms_ease-out]',
  ],
  {
    variants: {
      intent: {
        error: ['bg-error'],
        primary: ['bg-primary'],
        success: ['bg-success'],
      },
      size: {
        small: ['gap-x-[15px]', 'p-[15px]'],
      },
    },
    compoundVariants: [{ intent: 'primary', size: 'small', class: 'capitalize' }],
    defaultVariants: {
      intent: 'primary',
      size: 'small',
    },
  },
);

export default function Render({ isOpen, intent, viewPort, message, size, className, onOpenChange }: any) {
  return (
    <Toast.Provider swipeDirection='right'>
      <Toast.Root
        open={isOpen}
        duration={3000}
        className={toast({ intent, size, className })}
        onOpenChange={onOpenChange}
      >
        <ToastMessageDescription intent={intent} size={size} className={className} message={message} />
        <Toast.Close>
          <img src={closeIcon} alt='close icon' />
        </Toast.Close>
      </Toast.Root>
      <ToastMessageViewport intent={viewPort} size={size} className={className} />
    </Toast.Provider>
  );
}
