import * as Toast from '@radix-ui/react-toast';
import { styled } from 'react-cva';

import forbidIcon from 'assets/icons/forbidIcon.svg';

const Description = styled(Toast.Description)(['flex', 'items-center', 'justify-start'], {
  variants: {
    intent: {
      primary: ['text-center', 'text-white', '[grid-area:_title]'],
    },
    size: {
      normal: ['text-[15px]'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'normal',
  },
});

export default function Render({ message }) {
  return (
    <Description>
      <img src={forbidIcon} alt='close icon' className='pr-2' />
      {message}
    </Description>
  );
}
