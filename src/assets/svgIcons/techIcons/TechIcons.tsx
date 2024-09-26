import { SvgColor } from "@/ts/types/shared/SvgColors.types";

export const TechIcons = ({ color = "#828282" }: SvgColor) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.88013 23.5993H25.4801M7.48013 21.1993H21.8801C23.2056 21.1993 24.2801 20.1248 24.2801 18.7993V10.3993C24.2801 9.07378 23.2056 7.99927 21.8801 7.99927H7.48013C6.15464 7.99927 5.08013 9.07378 5.08013 10.3993V18.7993C5.08013 20.1248 6.15464 21.1993 7.48013 21.1993Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
