import { B4CAccordion } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "B4CComponents/BigElements/B4CAccordion",
  component: B4CAccordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof B4CAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    info: [
      {
        title: "Accordion1",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt saepe aliquid, itaque alias, obcaecati est perspiciatis blanditiis explicabo et tempora officiis tenetur deleniti. Veritatis, consequuntur? Dolorum sit similique doloribus!",
      },
      {
        title: "Accordion2",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt saepe aliquid, itaque alias, obcaecati est perspiciatis blanditiis explicabo et tempora officiis tenetur deleniti. Veritatis, consequuntur? Dolorum sit similique doloribus!",
      },
      {
        title: "Accordion2",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt saepe aliquid, itaque alias, obcaecati est perspiciatis blanditiis explicabo et tempora officiis tenetur deleniti. Veritatis, consequuntur? Dolorum sit similique doloribus!",
      },
    ],
  },
};
