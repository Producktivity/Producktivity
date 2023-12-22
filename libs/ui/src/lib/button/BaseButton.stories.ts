import type { Meta, StoryObj } from "@storybook/vue3";
import BaseButton from "./BaseButton.vue";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  title: "BaseButton",
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    label: "label",
  },
};

export const Heading: Story = {
  args: {
    label: "label",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to BaseButton!/gi)).toBeTruthy();
  },
};
