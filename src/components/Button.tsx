import { twMerge } from "tailwind-merge";
import { ButtonProps } from "../types";

export default function Button({
  children,
  buttonClassName,
  buttonLink,
}: ButtonProps) {
  const classes = twMerge(
    "bg-customGreenDark text-white py-2 px-4 rounded-full custom-margin-b-third",
    buttonClassName
  );

  return (
    <a href={buttonLink} className="inline-block" target="_blank">
      <button className={classes}>{children}</button>
    </a>
  );
}
