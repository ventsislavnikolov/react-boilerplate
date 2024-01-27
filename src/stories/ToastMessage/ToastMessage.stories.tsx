import * as Toast from '@radix-ui/react-toast';

import { ToastMessage } from 'components';

type StoryType = {
  (): JSX.Element;
  args?: Record<string, unknown>;
  argTypes?: Record<string, unknown>;
  decorators?: unknown[];
};

const meta = {
  component: ToastMessage,
};

export default meta;

export const Primary = {
  decorators: [
    (Story: StoryType) => (
      <Toast.Provider swipeDirection='right'>
        <Story />
      </Toast.Provider>
    ),
  ],
  argTypes: {
    severity: {
      options: ['primary', 'error', 'success'],
      control: 'radio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isOpen: {
      options: [true, false],
      control: 'boolean',
    },
    message: {
      control: 'text',
    },
    onOpenChange: () => {},
  },
  args: {
    severity: 'primary',
    isOpen: true,
    message: 'This is a toast message',
    onOpenChange: () => {},
  },
};
