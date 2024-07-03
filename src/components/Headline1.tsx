import { twMerge } from "tailwind-merge";
import { Headline1Props } from "../types";

export default function Headline1({
  children,
  headline1ClassName,
}: Headline1Props) {
  const classes = twMerge(
    "custom-h1 custom-margin-b-third",
    headline1ClassName
  );

  return <div className={classes}>{children}</div>;
}
