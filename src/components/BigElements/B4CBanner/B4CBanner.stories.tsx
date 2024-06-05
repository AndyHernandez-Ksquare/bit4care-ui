import { Box, Grid, Typography } from "@mui/material";
import { B4CBanner } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { B4CButton } from "@/components/B4CButton";
import { spacings } from "@/style/partials/spacings";
import { Size } from "@/ts/enums/Size";
import { B4CImage } from "../B4CImage";

const meta = {
  title: "B4CComponents/BigElements/B4CBanner",
  component: B4CBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof B4CBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <Grid container>
        <Grid
          item
          xs={12}
          desktop={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: spacings.spacing2,
          }}
        >
          <Typography variant="h5">Title</Typography>
          <Typography variant="body-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            incidunt quos harum quidem officiis nostrum, quisquam aliquam quae
            laboriosam aspernatur.
          </Typography>
          <Box sx={{ width: "100px" }}>
            <B4CButton label="Sample" variant="secondary" size={Size.Small} />
          </Box>
        </Grid>
        <Grid item xs={12} desktop={4}>
          <B4CImage
            width={200}
            height={200}
            alt="sample image"
            src="https://purepng.com/public/uploads/large/purepng.com-mariomariofictional-charactervideo-gamefranchisenintendodesigner-1701528634653vywuz.png"
          />
        </Grid>
      </Grid>
    ),
  },
};
