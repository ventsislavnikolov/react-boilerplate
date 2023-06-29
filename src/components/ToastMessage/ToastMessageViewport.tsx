import * as Toast from '@radix-ui/react-toast';
import { styled } from 'react-cva';

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

export default function Render() {
  return <Viewport />;
}
