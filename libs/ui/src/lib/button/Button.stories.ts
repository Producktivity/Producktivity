import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';
import { sizes } from './button';

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Button label',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Button disabled',
      control: { type: 'boolean' },
    },
    size: {
      description: 'Button size',
      options: Object.keys(sizes),
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Getting Started',
    disabled: false,
    size: 'base',
  },
};
