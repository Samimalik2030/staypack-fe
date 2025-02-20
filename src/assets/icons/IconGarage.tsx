import ICommonIconProps from "../../interfaces/ICommonIconProps";

function IconGarage(props: ICommonIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-car-garage"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
      <path d="M3 6l9 -4l9 4" />
    </svg>
  );
}

export default IconGarage;
