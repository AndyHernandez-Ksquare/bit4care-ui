import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { B4CCard } from "./B4CCard";

const meta = {
  title: "B4CComponents/Cards/B4CCard",
  component: B4CCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof B4CCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleCard: Story = {
  args: {
    title: "Title card",
    subtitle: "Subtitle",
    content:
      "Content for the text card he text card he text card he text card he text card he text card ",
  },
};

export const SimpleCardWithImage: Story = {
  args: {
    title: "Title card",
    content:
      "Content for the text card the text card the text card the text card the text card the text card",
    imageSrc:
      "https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?t=st=1713286467~exp=1713290067~hmac=b1d3e8493213aa953d86b1d33002690de45ae7ed0d67bcd161b95bb2213bafe4&w=1380",
    hasImage: true,
  },
};

export const SimpleCardWithBackgroundImage: Story = {
  args: {
    title: "Title card",
    content:
      "Content for the text card the text card the text card the text card the text card the text card",
    imageSrc:
      "https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?t=st=1713286467~exp=1713290067~hmac=b1d3e8493213aa953d86b1d33002690de45ae7ed0d67bcd161b95bb2213bafe4&w=1380",
    theme: "backgroundImage",
  },
};

export const OutlinedSimpleCard: Story = {
  args: {
    title: "Title card",
    outlined: true,
    content:
      "Content for the text card he text card he text card he text card he text card he text card ",
  },
};

export const OutlinedNegativeCard: Story = {
  args: {
    title: "Title card",
    theme: "negative",
    outlined: true,
    content:
      "Content for the text card he text card he text card he text card he text card he text card ",
  },
};

export const OutlinedNegativeWithHeaderCard: Story = {
  args: {
    title: "Title card",
    header: "header",
    theme: "negative",
    outlined: true,
    content:
      "Content for the text card he text card he text card he text card he text card he text card ",
  },
};
