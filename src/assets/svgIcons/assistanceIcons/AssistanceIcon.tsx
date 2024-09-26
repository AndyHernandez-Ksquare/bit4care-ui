import { SvgColor } from "@/ts/types/shared/SvgColors.types";

export const AssistanceIcon = ({ color = "#828282" }: SvgColor) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7801 12.2999C17.4701 13.4699 11.8901 13.4699 6.58008 12.2999L8.20008 5.72987C12.3401 3.74987 17.0201 3.74987 21.1601 5.72987L22.7801 12.2999Z"
        stroke={color}
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.1602 15.7196C21.7002 15.0896 22.2402 14.8196 22.7802 14.9996C23.5902 15.3596 23.8602 16.7996 23.4102 18.2396C22.9602 19.6796 21.8802 20.6696 21.0702 20.3096C21.0702 20.3096 20.9802 20.3096 20.9802 20.2196C20.2602 23.3696 17.7402 25.7096 14.6802 25.7096C11.6202 25.7096 9.01016 23.3696 8.38016 20.2196L8.29016 20.3096C7.48016 20.6696 6.40016 19.6796 5.95016 18.2396C5.41016 16.7996 5.68016 15.3596 6.58016 14.9996C7.12016 14.8196 7.75016 15.0896 8.20016 15.7196"
        stroke={color}
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6802 6.90039V10.5004"
        stroke={color}
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8801 8.69995H16.4801"
        stroke={color}
        strokeWidth="1.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
