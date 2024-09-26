import { SvgColor } from "@/ts/types/shared/SvgColors.types";

export const AutomovilIcon = ({ color = "#828282" }: SvgColor) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.48022 10.4L7.74647 13.1218C7.96212 13.3016 8.23396 13.4 8.51468 13.4H22.0457C22.3265 13.4 22.5983 13.3016 22.8139 13.1218L26.0802 10.4M8.68022 17.6H8.69223M21.8802 17.6H21.8922M10.673 6.19995H19.8875C20.7487 6.19995 21.544 6.66144 21.9712 7.40922L25.4478 13.4932C25.8622 14.2185 26.0802 15.0393 26.0802 15.8747V23C26.0802 23.6627 25.543 24.2 24.8802 24.2H23.6802C23.0175 24.2 22.4802 23.6627 22.4802 23V21.8H8.08022V23C8.08022 23.6627 7.54296 24.2 6.88022 24.2H5.68022C5.01749 24.2 4.48022 23.6627 4.48022 23V15.8747C4.48022 15.0393 4.69822 14.2185 5.11266 13.4932L8.58922 7.40922C9.01651 6.66144 9.81174 6.19995 10.673 6.19995ZM9.28022 17.6C9.28022 17.9313 9.01159 18.2 8.68022 18.2C8.34886 18.2 8.08022 17.9313 8.08022 17.6C8.08022 17.2686 8.34886 17 8.68022 17C9.01159 17 9.28022 17.2686 9.28022 17.6ZM22.4802 17.6C22.4802 17.9313 22.2115 18.2 21.8802 18.2C21.5489 18.2 21.2802 17.9313 21.2802 17.6C21.2802 17.2686 21.5489 17 21.8802 17C22.2115 17 22.4802 17.2686 22.4802 17.6Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
