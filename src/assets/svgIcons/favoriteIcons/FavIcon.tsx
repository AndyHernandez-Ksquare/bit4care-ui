import { SvgColor } from "@/ts/types/shared/SvgColors.types";

export const FavIcon = ({ color }: SvgColor) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.45067 14.3081L11.4033 20.8394C11.6428 21.0643 11.7625 21.1768 11.9037 21.2045C11.9673 21.217 12.0327 21.217 12.0963 21.2045C12.2375 21.1768 12.3572 21.0643 12.5967 20.8394L19.5493 14.3081C21.5055 12.4705 21.743 9.4465 20.0978 7.32597L19.7885 6.92724C17.8203 4.39048 13.8696 4.81592 12.4867 7.71355C12.2913 8.12286 11.7087 8.12286 11.5133 7.71355C10.1304 4.81592 6.17972 4.39049 4.21154 6.92725L3.90219 7.32597C2.25695 9.4465 2.4945 12.4705 4.45067 14.3081Z"
        fill={color}
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};
