import { B4CBadge } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { B4CAvatar } from "../B4CAvatar";
import { colorPalette } from "@/style/partials/colorPalette";

const meta = {
  title: "B4CComponents/SmallElements/B4CBadge",
  component: B4CBadge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof B4CBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeWithAvatarAndNumber: Story = {
  args: {
    badgeContent: "26",
    color: "success",
    children: B4CAvatar({ imageLink: "" }),
  },
};

export const BadgeWithAvatarImgAndNumber: Story = {
  args: {
    badgeContent: "+99",
    color: "primary",
    children: B4CAvatar({
      imageLink:
        "https://cdn.ntmx.me/media/2022/09/08/_hd005a0c5eeb1564ecef89a22a2219c36873545fc9.JPG",
    }),
  },
};

export const BadgeWithAvatarImgAndNumberError: Story = {
  args: {
    badgeContent: "X",
    color: "error",
    children: B4CAvatar({
      imageLink:
        "https://cdn.ntmx.me/media/2022/09/08/_hd005a0c5eeb1564ecef89a22a2219c36873545fc9.JPG",
    }),
  },
};
