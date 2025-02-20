import ICommonIconProps from "../../interfaces/ICommonIconProps";
import BaseIcon from "./BaseIcon";

function IconChevronDownOutlined(props: ICommonIconProps) {
  return (
    <BaseIcon withOutline {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </BaseIcon>
  );
}

export default IconChevronDownOutlined;
