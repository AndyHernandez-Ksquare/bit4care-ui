import { colorPalette } from "@/style/partials/colorPalette";

export const MoneyIcons = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.58579 5.58579C2 6.17157 2 7.11438 2 9V15C2 16.8856 2 17.8284 2.58579 18.4142C3.17157 19 4.11438 19 6 19H18C19.8856 19 20.8284 19 21.4142 18.4142C22 17.8284 22 16.8856 22 15V9C22 7.11438 22 6.17157 21.4142 5.58579C20.8284 5 19.8856 5 18 5H6C4.11438 5 3.17157 5 2.58579 5.58579ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H7C7.55228 9 8 8.55228 8 8C8 7.44772 7.55228 7 7 7H5ZM16 16C16 15.4477 16.4477 15 17 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H17C16.4477 17 16 16.5523 16 16ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        fill={colorPalette.primary}
      />
    </svg>
  );
};
