import { SvgColor } from "@/ts/types/shared/SvgColors.types";

export const EventsIcon = ({ color = "#828282" }: SvgColor) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5932 23.186L19.9545 19.6468C20.3175 18.6485 21.1342 17.741 22.1325 17.1965C25.0365 15.6538 25.4902 11.6608 23.04 9.21053L20.9527 7.12329C18.5025 4.67304 14.5095 5.12679 12.9668 8.03078C12.4223 9.02903 11.6055 9.75503 10.5165 10.2088L6.97727 11.57C2.80278 13.2035 1.89528 18.6485 5.16228 21.9155L8.24777 25.001C11.6055 28.268 16.9598 27.3605 18.5932 23.186Z"
        stroke={color}
        strokeWidth="1.815"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5968 16.2886C18.0503 16.2886 19.2286 15.1104 19.2286 13.6569C19.2286 12.2034 18.0503 11.0251 16.5968 11.0251C15.1434 11.0251 13.9651 12.2034 13.9651 13.6569C13.9651 15.1104 15.1434 16.2886 16.5968 16.2886Z"
        stroke={color}
        strokeWidth="1.815"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.88281 18.0129L12.2406 21.3707"
        stroke={color}
        strokeWidth="1.815"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9473 3.8562L20.8618 6.9417L23.3121 9.39194L26.3976 6.30645"
        stroke={color}
        strokeWidth="1.815"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
