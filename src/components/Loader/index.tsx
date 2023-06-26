import { styled } from 'react-cva';

const Container = styled('div')(['h-screen', 'w-full'], {
  variants: {
    intent: {
      primary: ['flex', 'flex-col', 'items-center', 'justify-center'],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

const Background = styled('div')(['absolute', 'rounded-full'], {
  variants: {
    intent: {
      primary: ['border-[2px]', 'border-solid', 'border-gray-200'],
    },
    size: {
      xs: ['h-[30px]', 'w-[30px]'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'xs',
  },
});

const Spinner = styled('div')(['absolute', 'animate-spin', 'rounded-full'], {
  variants: {
    intent: {
      primary: ['border-[2px]', 'border-solid', 'border-primary', 'border-t-transparent'],
    },
    size: {
      xs: ['h-[30px]', 'w-[30px]'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'xs',
  },
});

export default function Render() {
  return (
    <Container data-testid='loader'>
      <Background />
      <Spinner />
    </Container>
  );
}
