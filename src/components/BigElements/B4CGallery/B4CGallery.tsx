import { Grid, Typography } from "@mui/material";
import React from "react";
import { B4CImage } from "../B4CImage";
import { colorPalette } from "@/style/partials/colorPalette";
import { spacingScale, spacings } from "@/style/partials/spacings";

interface IB4CGalleryProps {
  title: string;
  description: string;
  gallery: { title: string; src: string; alt: string }[];
}

export const B4CGallery = ({
  title,
  description,
  gallery,
}: IB4CGalleryProps) => {
  return (
    <Grid container sx={{ width: "1056px" }} gap={spacings.spacing4}>
      <Grid item xs={6}>
        <Typography variant="h5" sx={{ color: colorPalette.primary }}>
          {title}
        </Typography>
        <Typography variant="body-normal">{description}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", gap: spacings.spacing4 }}>
        {gallery.map(({ title, src, alt }, index) => {
          return (
            <B4CImage
              key={`${alt}-${index}`}
              src={src}
              imageTitle={title}
              alt={alt}
              width={246}
              height={246}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
