import { B4CButton } from "@/components/B4CButton";
import { B4CTooltip } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Box, Typography } from "@mui/material";

const meta = {
  title: "B4CComponents/SmallElements/B4CTooltip",
  component: B4CTooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof B4CTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextVariant: Story = {
  args: { label: "Texto del tooltip", children: B4CButton({ label: "Boton" }) },
};

export const ComponentVariant: Story = {
  args: {
    label: (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptatibus ullam aliquam quaerat qui? Quidem quis magni, vel
          incidunt perferendis perspiciatis eaque voluptas! Odio aliquid vitae
          at consectetur ipsum aspernatur.
        </Typography>
        <B4CButton label="Boton" variant="secondary" />
      </Box>
    ),
    children: B4CButton({ label: "Boton" }),
  },
};
