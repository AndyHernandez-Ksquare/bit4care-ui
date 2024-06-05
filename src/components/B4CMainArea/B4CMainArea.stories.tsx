import { Box, Typography } from "@mui/material";
import { B4CMainArea } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { B4CGallery } from "../BigElements/B4CGallery";
import { B4CTable } from "../BigElements/B4CTable";
import {
  GridCellParams,
  GridColDef,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";

const meta = {
  title: "B4CComponents/B4CMainArea",
  component: B4CMainArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof B4CMainArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    profileName: "Alex Marin",
    profileRole: "Admin",
    profileImgURL:
      "https://cdn.ntmx.me/media/2022/09/08/_hd005a0c5eeb1564ecef89a22a2219c36873545fc9.JPG",
    children: (
      <>
        <Box>
          <B4CGallery
            title="Gallery title"
            description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda iure delectus deleniti illo ipsa, velit repellat necessitatibus culpa animi, quas error minus nemo neque maiores facere labore, nam cum omnis."
            gallery={[
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
            ]}
          />
        </Box>
      </>
    ),
  },
};
