import { B4CGallery } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "B4CComponents/BigElements/B4CGallery",
  component: B4CGallery,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof B4CGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  args: {
    title: "Gallery title",

    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda iure delectus deleniti illo ipsa, velit repellat necessitatibus culpa animi, quas error minus nemo neque maiores facere labore, nam cum omnis.",
    gallery: [
      {
        title: "Titulo de la imagen",
        alt: "snow-man",
        src: "https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?t=st=1713286467~exp=1713290067~hmac=b1d3e8493213aa953d86b1d33002690de45ae7ed0d67bcd161b95bb2213bafe4&w=1380",
      },
      {
        title: "Titulo de la imagen",
        alt: "snow-man",
        src: "https://img.freepik.com/foto-gratis/pintura-lago44-9126.jpg?t=st=1713286467~exp=1713290067~hmac=b1d3e8493213aa953d86b1d33002690de45ae7ed0d67bcd161b95bb2213bafe4&w=1380",
      },
      {
        title: "Titulo de la imagen",
        alt: "snow-man",
        src: "https://img.freepik.com/foto-gratis/pintura-lago44-9126.jpg?t=st=1713286467~exp=1713290067~hmac=b1d3e8493213aa953d86b1d33002690de45ae7ed0d67bcd161b95bb2213bafe4&w=1380",
      },
      {
        title: "Titulo de la imagen",
        alt: "snow-man",
        src: "https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?t=st=1713286467~exp=1713290067~hmac=b1d3e8493213aa953d86b1d33002690de45ae7ed0d67bcd161b95bb2213bafe4&w=1380",
      },
    ],
  },
};
