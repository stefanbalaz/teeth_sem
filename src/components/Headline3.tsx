import { twMerge } from "tailwind-merge";
import { Headline3Props } from "../types";

export default function Headline3({
  children,
  headline3ClassName,
}: Headline3Props) {
  const classes = twMerge(
    "custom-h3 custom-margin-b-third",
    headline3ClassName
  );

  return <div className={classes}>{children}</div>;
}
