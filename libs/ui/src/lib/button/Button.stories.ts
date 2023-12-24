import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';
import { sizes, variants, shapes } from './button';

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    slots: {
      default: {
        description: 'Data to display',
        type: 'text',
      },
    },
  },
  argTypes: {
    disabled: {
      description: 'Button disabled',
      control: { type: 'boolean' },
    },
    size: {
      description: 'Button size',
      options: Object.keys(sizes),
      control: { type: 'inline-radio' },
    },
    variant: {
      description: 'Button variant',
      options: Object.keys(variants).filter((v) => v !== 'disabled'),
      control: { type: 'inline-radio' },
    },
    shape: {
      description: 'Button shape',
      options: Object.keys(shapes),
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'Getting Started',
    disabled: false,
    size: 'base',
    variant: 'primary',
    shape: 'base',
  },
};
