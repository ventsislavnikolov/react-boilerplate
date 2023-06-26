import * as Toast from '@radix-ui/react-toast';
import { styled } from 'react-cva';

import closeIcon from 'assets/icons/closeIcon.svg';
import forbidIcon from 'assets/icons/forbidIcon.svg';

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

const Description = styled(Toast.Description)(['flex', 'items-center', 'justify-start'], {
  variants: {
    intent: {
      primary: ['text-center', 'text-white', '[grid-area:_title]'],
    },
    size: {
      normal: ['text-[15px'],
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

const Viewport = styled(Toast.Viewport)(
  ['fixed', 'bottom-0', 'right-0', 'z-[2147483647]', 'm-0', 'flex', 'list-none', 'flex-col'],
  {
    variants: {
      intent: {
        primary: [
          'gap-[10px]',
          'p-[var(--viewport-padding)]',
          'outline-none',
          '[--viewport-padding:_25px]',
        ],
      },
      size: {
        normal: ['w-[402px]', 'max-w-[100vw]'],
      },
    },
    defaultVariants: {
      intent: 'primary',
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
        <Description>
          <img src={forbidIcon} alt='close icon' className='pr-2' />
          {message}
        </Description>
        <Toast.Close>
          <img src={closeIcon} alt='close icon' />
        </Toast.Close>
      </Root>
      <Viewport />
    </>
  );
}
