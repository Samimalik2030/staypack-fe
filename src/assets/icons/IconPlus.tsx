import ICommonIconProps from "../../interfaces/ICommonIconProps";
import BaseIcon from "./BaseIcon";

function IconPlus(props: ICommonIconProps) {
  return (
    <BaseIcon {...props} withOutline>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </BaseIcon>
  );
}

export default IconPlus;
