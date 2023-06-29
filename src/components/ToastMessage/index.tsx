import * as Toast from '@radix-ui/react-toast';
import { styled } from 'react-cva';

import closeIcon from 'assets/icons/closeIcon.svg';

import ToastMessageViewport from './ToastMessageViewport';
import ToastMessageDescription from './ToastMessageDescription';

const Root = styled(Toast.Root)(
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
        primary: ['bg-primary'],
        error: ['bg-error'],
        success: ['bg-success'],
      },
      size: {
        normal: ['gap-x-[15px]', 'p-[15px]'],
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  },
);

export interface RenderProps {
  isOpen: boolean;
  message: string;
  severity: 'error' | 'primary' | 'success';
  onOpenChange: () => void;
}

export default function Render({ isOpen, message, severity, onOpenChange }: RenderProps) {
  return (
    <>
      <Root open={isOpen} duration={3000} intent={severity} onOpenChange={() => onOpenChange()}>
        <ToastMessageDescription message={message} />
        <Toast.Close>
          <img src={closeIcon} alt='close icon' />
        </Toast.Close>
      </Root>
      <ToastMessageViewport />
    </>
  );
}
