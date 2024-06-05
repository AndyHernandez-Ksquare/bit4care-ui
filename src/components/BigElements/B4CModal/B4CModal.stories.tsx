import { B4CModal } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Fragment } from "react";
import { B4CImage } from "../B4CImage";
import { Box, Typography } from "@mui/material";
import { B4CButton } from "@/components/B4CButton";
import { Size } from "@/ts/enums/Size";

const meta = {
  title: "B4CComponents/BigElements/B4CModal",
  component: B4CModal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof B4CModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularImage: Story = {
  args: {
    open: true,
    children: (
      <Fragment>
        <B4CImage
          alt="snow-man"
          src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?t=st=1713286467~exp=1713290067~hmac=b1d3e8493213aa953d86b1d33002690de45ae7ed0d67bcd161b95bb2213bafe4&w=1380"
          width={96}
          height={96}
        />
        <Typography variant="h5">Title</Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos totam
          modi, cupiditate consequuntur id earum ducimus neque necessitatibus
          perspiciatis est perferendis reprehenderit atque consequatur deleniti
          quaerat qui facilis! Consequatur, voluptatem?
        </Typography>
        <B4CButton variant="primary" label="Button Sample" size={Size.Normal} />
      </Fragment>
    ),
  },
};
