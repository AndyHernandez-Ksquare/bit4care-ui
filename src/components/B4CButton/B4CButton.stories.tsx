import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { B4CButton } from "./B4CButton";
import { Size } from "@/ts/enums/Size";
import { addRoundLight } from "@/assets/svgIcons/addIcons/addRoundLight";

const meta = {
  title: "B4CComponents/B4CButton",
  component: B4CButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof B4CButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Normal Sample",
    size: Size.Normal,
  },
};

export const Scondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Normal Sample",
    size: Size.Normal,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Outlined Medium Sample",
    size: Size.Medium,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "Outlined Medium Sample",
    size: Size.Medium,
    disabled: true,
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: "outlined",
    label: "Outlined Medium Sample",
    size: Size.Medium,
    disabled: true,
  },
};

export const PrimaryIcon: Story = {
  args: {
    variant: "primary",
    label: "Primary Medium Sample",
    size: Size.Normal,
    startIcon: addRoundLight({ sx: {} }),
  },
};

export const SecondaryIcon: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Medium Sample",
    size: Size.Normal,
    startIcon: addRoundLight({ sx: {} }),
  },
};
