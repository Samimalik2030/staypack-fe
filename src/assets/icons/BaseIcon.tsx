import { ReactNode } from "react";
import ICommonIconProps from "../../interfaces/ICommonIconProps";
import { COMMON_ICON_PROPS } from "../../constants/COMMON_ICON_PROPS";

interface BaseIconProps extends ICommonIconProps {
  children: ReactNode;
  withOutline?: boolean;
}

function BaseIcon({
  color = COMMON_ICON_PROPS.color,
  size = COMMON_ICON_PROPS.size,
  withOutline = false,
  fill = COMMON_ICON_PROPS.fill,
  children,
}: BaseIconProps) {
  if (withOutline) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      {children}
    </svg>
  );
}

export default BaseIcon;
