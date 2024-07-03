import { twMerge } from "tailwind-merge";
import { Headline2Props } from "../types";

export default function Headline2({
  children,
  headline2ClassName,
}: Headline2Props) {
  const classes = twMerge(
    "custom-h2 custom-margin-b-third",
    headline2ClassName
  );

  return <div className={classes}>{children}</div>;
}
