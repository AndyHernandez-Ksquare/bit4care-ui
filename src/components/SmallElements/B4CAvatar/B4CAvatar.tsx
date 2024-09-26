import { colorPalette } from "@/style/partials/colorPalette";
import { Avatar } from "@mui/material";

interface B4CAvatar {
  alt?: string;
  imageLink?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const B4CAvatar = ({
  alt,
  className,
  imageLink,
  width = 64,
  height = 64,
}: B4CAvatar) => {
  return (
    <Avatar
      className={className}
      alt={alt}
      src={imageLink}
      sx={{
        bgcolor: colorPalette.primary,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};
