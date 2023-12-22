import type { Meta, StoryObj } from "@storybook/vue3";
import Typography from "./Typography.vue";
import { variants } from "./typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Typography",
  tags: ["autodocs"],
  parameters: {
    slots: {
      default: {
        description: "Text to display",
        type: "text",
      },
    },
  },
  argTypes: {
    default: {
      description: "Text to display",
      control: { type: "text" },
    },
    bold: {
      description: "Whether to use bold font or not",
      control: { type: "boolean" },
    },
    variant: {
      description: "Typography variant",
      options: Object.keys(variants),
      control: { type: "inline-radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: "Hello World",
    variant: "title",
    bold: false,
  },
};
